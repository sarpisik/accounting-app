import express from 'express';
import { routes } from '@routes';
import { MongoCallback, MongoClient } from 'mongodb';

interface AppConfig {
    dbUrl: string;
}

export type DB = ReturnType<MongoClient['db']>;

export abstract class AppBase {
    app = express();
    middlewares = [express.json(), express.urlencoded({ extended: true })];
    private _client: MongoClient;
    private _db!: DB;

    constructor(config: AppConfig) {
        this._client = new MongoClient(config.dbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    }

    // Database methods
    async connectDB() {
        await this._client.connect();
        this._db = this._client.db();
    }
    disconnectDB(cb: MongoCallback<void>) {
        this._client.close(cb);
    }
    dropDB(cb: MongoCallback<any>) {
        this._db.dropDatabase(cb);
    }

    // App methods
    async init() {
        await this.connectDB();

        // Register middlewares
        this.middlewares.forEach((mid) => this.app.use(mid));

        // Register routes
        this.app.use('/', routes(this._db));

        return this.app;
    }
}
