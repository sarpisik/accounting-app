import { PostUser } from '@shared-types/entities';
import { UserPath } from '@shared-types/routes';
import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { successPayload, withCatchError } from '../../shared';
import { UserService } from '../service';
import { getUsers, withHashPassword } from './utils';

export default class UsersController extends UserPath {
    router = Router();

    constructor(protected _service: UserService) {
        super();

        this.router.get('/', getUsers.bind(this));
        this.router.post('/', this.addUser);
    }

    addUser = withCatchError<
        any,
        PostUser['resBody']['success'],
        PostUser['reqBody']
    >(async (req, res) => {
        const { name, email, password } = req.body;

        const user = await this._service.addUser(
            withHashPassword({ name, email, password })
        );

        res.status(StatusCodes.OK).json(successPayload({ email: user.email }));
    }).bind(this);
}
