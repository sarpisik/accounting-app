import { Router } from 'express';
import { usersApi } from './users';

export function routes(db: Parameters<typeof usersApi>[0]) {
    const router = Router();

    [usersApi(db)].forEach((api) => {
        router.use(api.path, api.router);
    });

    return router;
}
