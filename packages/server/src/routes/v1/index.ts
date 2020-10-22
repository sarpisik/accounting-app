import { Router } from 'express';
import { sessionApi } from './session';
import { usersApi } from './users';

const APIS = [sessionApi, usersApi] as const;

export function routes(db: Parameters<typeof usersApi>[0]) {
    const router = Router();

    APIS.map((api) => api(db)).forEach((api) => {
        router.use(api.path, api.router);
    });

    return router;
}
