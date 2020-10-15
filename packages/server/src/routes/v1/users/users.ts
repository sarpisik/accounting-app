import { UsersController } from './controller';
import { UserService } from './service';

export function usersApi(db: ConstructorParameters<typeof UserService>[0]) {
    return new UsersController(new UserService(db));
}
