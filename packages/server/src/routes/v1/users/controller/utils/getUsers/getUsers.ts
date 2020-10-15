import UsersController from '../../controller';

export default function getUsers(this: UsersController) {
    return this._service.getUsers();
}
