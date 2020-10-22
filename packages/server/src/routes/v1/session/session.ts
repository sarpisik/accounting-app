import { AccountService, UserService } from '../shared/services';
import { SessionController } from './controller';

export function sessionApi(db: ConstructorParameters<typeof UserService>[0]) {
    return new SessionController(new UserService(db), new AccountService(db));
}
