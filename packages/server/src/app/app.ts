import logger from '@shared/Logger';
import { NextFunction, Request, Response } from 'express';
import helmet from 'helmet';
import { StatusCodes } from 'http-status-codes';
import morgan from 'morgan';
import { AppBase } from './types';

const PRODUCTION = process.env.NODE_ENV === 'production';

export default class App extends AppBase {
    constructor() {
        super({ dbUrl: process.env.DB_URL as string });

        this.middlewares = this.middlewares.concat(
            [PRODUCTION && helmet(), !PRODUCTION && morgan('dev')].filter(
                Boolean
            ) as AppBase['middlewares']
        );
    }

    async init() {
        const app = await super.init();

        // Print API errors
        app.use(
            (err: Error, req: Request, res: Response, next: NextFunction) => {
                logger.error(err.message, err);
                return res.status(StatusCodes.BAD_REQUEST).json({
                    error: err.message,
                });
            }
        );

        return app;
    }
}
