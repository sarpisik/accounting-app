import { UserService } from '../shared/services';
import { UsersController } from './controller';

export function usersApi(db: ConstructorParameters<typeof UserService>[0]) {
    return new UsersController(new UserService(db));
}
