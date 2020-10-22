/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
    DeleteSignOut,
    PostConfirmEmail,
    PostSignIn,
    PostSignUp,
} from '@shared-types/entities';
import { SessionPath } from '@shared-types/routes';
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
import { ResType, withCatchError } from '../../shared';
import { AccountService, UserService } from '../../shared/services';
import { IAccountDocument } from '../../shared/services/account/types';
import { IUserDocument } from '../../shared/services/users/types';
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
    locals: Record<'user', IUserDocument>;
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

        this.router.post(
            '/sign-in',
            this.signInValidator.fields,
            this.signInValidator.validate,
            this.checkUserByEmail,
            this.checkEmailConfirmed,
            this.checkUserPass,
            this.signIn,
            this.setSession
        );
        this.router.post(
            '/sign-up',
            this.signUpValidator.fields,
            this.signUpValidator.validate,
            checkEmailUsed(this._userService),
            this.signUp
        );
        // Ignore overload local params
        // @ts-ignore
        this.router.post(
            '/confirm-email',
            this.confirmEmailValidator.fields,
            this.confirmEmailValidator.validate,
            this.createAccount,
            this.confirmEmail
        );
        this.router.delete('/sign-out', this.signOut);
    }

    checkUserByEmail = withCatchError<
        PostSignIn['req'],
        PostSignIn['resBody']['success'],
        SignInLocals<PostSignIn['resBody']['success']>
    >(async (req, res, next) => {
        const { email } = req.body,
            user = await this._userService.getUserWithPassword(
                this._userService.safeFilter('email', email)
            );

        if (!user) throw new DocNotFoundError('User', 'email', email);

        res.locals.user = user;
        next();
    });

    checkEmailConfirmed = withCatchError<
        PostSignIn['req'],
        PostSignIn['resBody']['success'],
        SignInLocals<PostSignIn['resBody']['success']>
    >(async (_req, res, next) => {
        const { email, isValidated } = res.locals.user,
            emailNotConfirmed =
                typeof isValidated !== 'boolean' || !isValidated;

        if (emailNotConfirmed) throw new EmailNotConfirmedError(email);

        next();
    });

    checkUserPass = withCatchError<
        PostSignIn['req'],
        PostSignIn['resBody']['success'],
        SignInLocals<PostSignIn['resBody']['success']>
    >(async (req, res, next) => {
        const { email, password } = req.body,
            { password: hashedPass } = res.locals.user,
            passValid = await compareHashPass(password, hashedPass);

        if (!passValid) throw new PasswordInvalidError(email);

        next();
    });

    signIn = withCatchError<
        PostSignIn['req'],
        PostSignIn['resBody']['success'],
        SignInLocals<PostSignIn['resBody']['success']>
    >(async (_req, res, next) => {
        const { _id } = res.locals.user,
            user = await this._userService.updateUserById(_id.toString(), {
                last_login: new Date(),
            });

        if (!user) throw new MutateFailedError('User', 'id', _id);

        next();
    });

    setSession = withCatchError<
        PostSignIn['req'],
        PostSignIn['resBody']['success'],
        SignInLocals<PostSignIn['resBody']['success']>
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
