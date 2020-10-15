import express from 'express';
import { MongoCallback, MongoClient } from 'mongodb';

interface AppConfig {
    dbUrl: string;
}

export abstract class AppBase {
    app = express();
    middlewares = [express.json(), express.urlencoded({ extended: true })];
    private _client: MongoClient;
    private _db!: ReturnType<MongoClient['db']>;

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
        this.middlewares.forEach((mid) => this.app.use(mid));
        return this.app;
    }
}
