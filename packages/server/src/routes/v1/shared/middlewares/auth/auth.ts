import { UnAuthorizedError } from '@shared/errors';
import { LocalUser, UserService } from 'src/routes/v1/users/service';
import { ReqType, ResType, withCatchError } from '../withCatchError';

export interface ReqAuth extends ReqType {
    session?: Express.Session;
}

export function auth(service: UserService) {
    return withCatchError<ReqAuth>(async function authMiddleware(
        req,
        res,
        next
    ) {
        const userId = req.session?.userId;

        if (userId) res.locals.account = await service.getUserById(userId);

        next();
    });
}

interface Authenticated<ResBody> extends ResType<ResBody> {
    locals: LocalUser | Record<string, unknown>;
}

export function authenticated<ResBody>() {
    return withCatchError<ReqAuth, ResBody, Authenticated<ResBody>>(
        async function authenticated(_req, res, next) {
            if (!res.locals.account) throw new UnAuthorizedError();
            next();
        }
    );
}
