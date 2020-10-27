/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
    DeleteSignOut,
    GetSessionUser,
    PostConfirmEmail,
    PostSignIn,
    PostSignUp,
} from '@shared-types/entities';
import { PATHS, pathWithLeadSlash, SessionPath } from '@shared-types/routes';
import {
    CreateFailedError,
    DocNotFoundError,
    EmailNotConfirmedError,
    MutateFailedError,
    PasswordInvalidError,
} from '@shared/errors';
import { successPayload } from '@shared/functions';
import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Decimal128, ObjectID } from 'mongodb';
import { auth, authenticated, ResType, withCatchError } from '../../shared';
import { AccountService, UserService } from '../../shared/services';
import { IAccountDocument } from '../../shared/services/account/types';
import { IUserWithAccount } from '../../shared/services/users/types';
import {
    compareHashPass,
    withHashPassword,
} from '../../users/controller/utils';
import { checkEmailUsed } from '../middlewares';
import {
    ConfirmEmailValidator,
    SignInValidator,
    SignUpValidator,
} from '../validator';

interface ConfirmEmailLocals<ResBody> extends ResType<ResBody> {
    locals: { account: IAccountDocument };
}

interface SignInLocals<ResBody> extends ResType<ResBody> {
    locals: Record<'user', IUserWithAccount>;
}

interface SessionUserLocals<ResBody> extends ResType<ResBody> {
    locals: Record<
        'user',
        GetSessionUser<ObjectID, Decimal128>['resBody']['success']['payload']
    >;
}

export default class SessionController extends SessionPath {
    router = Router();
    signUpValidator = new SignUpValidator();
    signInValidator = new SignInValidator();
    confirmEmailValidator = new ConfirmEmailValidator();

    constructor(
        protected _userService: UserService,
        protected _accountService: AccountService
    ) {
        super();

        this.router.get(
            pathWithLeadSlash(PATHS.SESSION),
            auth(this._userService),
            authenticated(),
            this.sendUser
        );
        this.router.post(
            pathWithLeadSlash(PATHS.SIGN_IN),
            this.signInValidator.fields,
            this.signInValidator.validate,
            this.checkUserByEmail,
            this.checkUserPass,
            this.signIn,
            this.setSession
        );
        this.router.post(
            pathWithLeadSlash(PATHS.SIGN_UP),
            this.signUpValidator.fields,
            this.signUpValidator.validate,
            checkEmailUsed(this._userService),
            this.signUp
        );
        // Ignore overload local params
        // @ts-ignore
        this.router.post(
            pathWithLeadSlash(PATHS.CONFIRM_EMAIL),
            this.confirmEmailValidator.fields,
            this.confirmEmailValidator.validate,
            this.createAccount,
            this.confirmEmail
        );
        this.router.delete(pathWithLeadSlash(PATHS.SIGN_OUT), this.signOut);
    }

    sendUser = withCatchError<
        any,
        GetSessionUser<ObjectID, Decimal128>['resBody']['success'],
        SessionUserLocals<
            GetSessionUser<ObjectID, Decimal128>['resBody']['success']
        >
    >(async (_req, res) => {
        res.status(StatusCodes.OK).json(successPayload(res.locals.user));
    });

    checkUserByEmail = withCatchError<
        PostSignIn<ObjectID, Decimal128>['req'],
        PostSignIn<ObjectID, Decimal128>['resBody']['success'],
        SignInLocals<PostSignIn<ObjectID, Decimal128>['resBody']['success']>
    >(async (req, res, next) => {
        const { email } = req.body,
            user = await this._userService.getUserWithAccount(
                Object.assign(
                    this._userService.safeFilter('email', email),
                    this._userService.safeFilter('isValidated', true)
                )
            );

        if (!user) throw new EmailNotConfirmedError(email);

        res.locals.user = user;
        next();
    });

    checkUserPass = withCatchError<
        PostSignIn<ObjectID, Decimal128>['req'],
        PostSignIn<ObjectID, Decimal128>['resBody']['success'],
        SignInLocals<PostSignIn<ObjectID, Decimal128>['resBody']['success']>
    >(async (req, res, next) => {
        const { email, password } = req.body,
            { password: hashedPass } = res.locals.user,
            passValid = await compareHashPass(password, hashedPass);

        if (!passValid) throw new PasswordInvalidError(email);

        next();
    });

    signIn = withCatchError<
        PostSignIn<ObjectID, Decimal128>['req'],
        PostSignIn<ObjectID, Decimal128>['resBody']['success'],
        SignInLocals<PostSignIn<ObjectID, Decimal128>['resBody']['success']>
    >(async (_req, res, next) => {
        const { _id } = res.locals.user,
            user = await this._userService.updateUserById(_id.toString(), {
                last_login: new Date(),
            });

        if (!user) throw new MutateFailedError('User', 'id', _id);

        next();
    });

    setSession = withCatchError<
        PostSignIn<ObjectID, Decimal128>['req'],
        PostSignIn<ObjectID, Decimal128>['resBody']['success'],
        SignInLocals<PostSignIn<ObjectID, Decimal128>['resBody']['success']>
    >(async (req, res) => {
        const { session } = req,
            { password, ...localUser } = res.locals.user;

        if (session) session.userId = localUser._id;

        res.status(StatusCodes.OK).json(successPayload(localUser));
    });

    signUp = withCatchError<
        PostSignUp['req'],
        PostSignUp['resBody']['success']
    >(async (req, res) => {
        const { name, email, password } = req.body;

        await this._userService.addUser(
            withHashPassword({ name, email, password })
        );

        res.status(StatusCodes.CREATED).json(successPayload(null));
    });

    createAccount = withCatchError<
        PostConfirmEmail['req'],
        PostConfirmEmail['resBody']['success'],
        ConfirmEmailLocals<PostConfirmEmail['resBody']['success']>
    >(async (req, res, next) => {
        const { email } = req.body,
            account = await this._accountService.createAccount();

        if (!account) throw new CreateFailedError('Account', 'User', email);

        res.locals.account = account;

        next();
    });

    confirmEmail = withCatchError<
        PostConfirmEmail['req'],
        PostConfirmEmail['resBody']['success'],
        ConfirmEmailLocals<PostConfirmEmail['resBody']['success']>
    >(async (req, res) => {
        const { email } = req.body,
            { _id } = res.locals.account,
            user = await this._userService.updateUserByEmail(email, {
                isValidated: true,
                account: _id,
            });

        if (!user) {
            this._accountService.deleteAccount(_id);
            throw new DocNotFoundError('User', 'email', email);
        }

        res.status(StatusCodes.OK).json(
            successPayload({ email: user.email, isValidated: user.isValidated })
        );
    });

    signOut = withCatchError<
        DeleteSignOut['req'],
        DeleteSignOut['resBody']['success']
    >(async (req, res, next) => {
        const { session } = req;

        if (session)
            session.destroy((err) =>
                err
                    ? next(err)
                    : res.status(StatusCodes.OK).json(successPayload(null))
            );
        else res.status(StatusCodes.OK).json(successPayload(null));
    });
}
