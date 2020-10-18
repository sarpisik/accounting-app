import { DeleteUser, GetUser, PostUser, PutUser } from '@shared-types/entities';
import { UserPath } from '@shared-types/routes';
import {
    DeleteFailedError,
    DocNotFoundError,
    MutateFailedError,
} from '@shared/errors';
import { successPayload } from '@shared/functions';
import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { auth, authenticated, ResType, withCatchError } from '../../shared';
import { LocalUser, UserService } from '../service';
import { IUserDocument } from '../service/types';
import { withHashPassword } from './utils';

interface _GetUserResWithLocals<ResBody> extends ResType<ResBody> {
    locals: { user?: Partial<IUserDocument> };
}

interface LocalsWithUser extends ResType<GetUser['resBody']['success']> {
    locals: Record<'user', LocalUser>;
}

export default class UsersController extends UserPath {
    router = Router();

    constructor(protected _service: UserService) {
        super();

        this.router.get('/:param', this._getUser, this.getUser);
        this.router.put(
            '/:param',
            auth(this._service),
            authenticated(),
            this.updateUser
        );
        this.router.put(
            '/email-confirmation/:param',
            this._getUser,
            this.updateUser
        );
        this.router.delete('/:id', this.deleteUser);
        this.router.post('/', this.addUser);
    }

    private _getUser = withCatchError<
        GetUser['req'],
        GetUser['resBody']['success'],
        _GetUserResWithLocals<GetUser['resBody']['success']>
    >(async (req, res, next) => {
        const query = req.query.by,
            param = req.params.param,
            user = await this._service[
                query === 'email' ? 'getUserByEmail' : 'getUserById'
            ](param);

        if (!user) throw new DocNotFoundError('User', query, param);

        res.locals.user = user;

        next();
    });

    getUser = withCatchError<
        GetUser['req'],
        GetUser['resBody']['success'],
        LocalsWithUser
    >(async (_req, res) => {
        // Ignore ObjectId
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        res.status(StatusCodes.OK).json(successPayload(res.locals.user));
    });

    addUser = withCatchError<PostUser['req'], PostUser['resBody']['success']>(
        async (req, res) => {
            const { name, email, password } = req.body;

            const user = await this._service.addUser(
                withHashPassword({ name, email, password })
            );

            res.status(StatusCodes.CREATED).json(
                successPayload({ email: user.email })
            );
        }
    );

    updateUser = withCatchError<
        PutUser['req'],
        PutUser['resBody']['success'],
        LocalsWithUser
    >(async (req, res) => {
        const query = req.query.by,
            param = req.params.param,
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            { _id, ..._user } = req.body,
            user = await this._service[
                query === 'email' ? 'updateUserByEmail' : 'updateUserById'
            ](param, _user);

        if (!user) throw new MutateFailedError('User', query, param);

        res.status(StatusCodes.OK).json(
            successPayload(
                Object.assign(user, {
                    _id: user._id.toString(),
                    account: user.account ? user.account.toString() : null,
                })
            )
        );
    });

    deleteUser = withCatchError<
        DeleteUser['req'],
        DeleteUser['resBody']['success']
    >(async (req, res) => {
        const { id } = req.params,
            result = await this._service.deleteUserById(id),
            deleteFailed = result !== 1;

        if (deleteFailed) throw new DeleteFailedError('User', 'id', id);

        res.status(StatusCodes.OK).json(successPayload(null));
    });
}
