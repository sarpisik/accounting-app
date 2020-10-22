import { PostSignUp } from '@shared-types/entities';
import { EmailTakenError } from '@shared/errors';
import { UserService, withCatchError } from '../../../shared';

export function checkEmailUsed(service: UserService) {
    return withCatchError<PostSignUp['req']>(
        async function checkEmailUsedMiddleware(req, _res, next) {
            const { email } = req.body;

            const user = await service.getUserByEmail(email);

            if (user) throw new EmailTakenError(email);

            next();
        }
    );
}
