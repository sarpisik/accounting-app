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
import { withCatchError } from '../../shared';
import { UserService } from '../service';
import { withHashPassword } from './utils';

export default class UsersController extends UserPath {
    router = Router();

    constructor(protected _service: UserService) {
        super();

        this.router.get('/:param', this._getUser, this.getUser);
        this.router.put('/:param', this._getUser, this.updateUser);
        this.router.delete('/:id', this.deleteUser);
        this.router.post('/', this.addUser);
    }

    private _getUser = withCatchError<
        GetUser['reqParams'],
        any,
        unknown,
        GetUser['reqQuery']
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
        GetUser['reqParams'],
        GetUser['resBody']['success'],
        undefined,
        GetUser['reqQuery']
    >(async (req, res) => {
        res.status(StatusCodes.OK).json(successPayload(res.locals.user));
    });

    addUser = withCatchError<
        any,
        PostUser['resBody']['success'],
        PostUser['reqBody']
    >(async (req, res) => {
        const { name, email, password } = req.body;

        const user = await this._service.addUser(
            withHashPassword({ name, email, password })
        );

        res.status(StatusCodes.CREATED).json(
            successPayload({ email: user.email })
        );
    });

    updateUser = withCatchError<
        PutUser['reqParams'],
        PutUser['resBody']['success'],
        PutUser['reqBody'],
        PutUser['reqQuery']
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
        DeleteUser['reqParams'],
        DeleteUser['resBody']['success'],
        undefined,
        undefined
    >(async (req, res) => {
        const { id } = req.params,
            result = await this._service.deleteUserById(id),
            deleteFailed = result !== 1;

        if (deleteFailed) throw new DeleteFailedError('User', 'id', id);

        res.status(StatusCodes.OK).json(successPayload(null));
    });
}
