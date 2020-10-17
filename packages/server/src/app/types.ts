import { routes } from '@routes';
import { ErrorTypes } from '@shared-types/entities/shared';
import { CustomError } from '@shared/errors';
import { errorPayload } from '@shared/functions';
import logger from '@shared/Logger';
import express from 'express';
import { StatusCodes } from 'http-status-codes';
import { MongoClient } from 'mongodb';

interface AppConfig {
    dbUrl: string;
}

export type DB = ReturnType<MongoClient['db']>;

export abstract class AppBase {
    app = express();
    middlewares = [express.json(), express.urlencoded({ extended: true })];
    protected _client: MongoClient;
    protected _db!: DB;

    constructor(config: AppConfig) {
        this._client = new MongoClient(config.dbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    }

    // Database methods
    async connectDB(dbName?: string) {
        await this._client.connect();
        this._db = this._client.db(dbName);
    }

    // App methods
    async init() {
        await this.connectDB();
        this.setMiddlewares();
        this.setRoutes();
        this.setErrorHandler();
        return this.app;
    }

    setMiddlewares() {
        this.middlewares.forEach((mid) => this.app.use(mid));
    }

    setRoutes() {
        this.app.use('/', routes(this._db));
    }

    setErrorHandler() {
        this.app.use(
            (
                err: CustomError,
                _req: express.Request,
                res: express.Response,
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                _next: express.NextFunction
            ) => {
                // Print API errors
                logger.error(err.message, err);

                return res
                    .status(err.statusCode || StatusCodes.BAD_REQUEST)
                    .json(
                        errorPayload(
                            err.type || ErrorTypes.BAD_REQUEST,
                            err.message
                        )
                    );
            }
        );
    }
}
