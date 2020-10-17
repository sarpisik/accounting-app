import { AppBase } from '@app';
import { MongoMemoryServer } from 'mongodb-memory-server';

export abstract class _App extends AppBase {
    abstract stop(): Promise<void>;
    abstract resetDB(): Promise<void>;
}

export async function createApp() {
    const mongo = new MongoMemoryServer();
    const dbUrl = await mongo.getUri('accounting-app-test');

    return class App extends _App {
        constructor() {
            super({ dbUrl });
        }

        async stop() {
            await this._client.close();
            await mongo.stop();
        }

        async resetDB() {
            const collections = await this._db.listCollections().toArray();

            await Promise.all(
                collections
                    .map(({ name }) => name)
                    .map((collection) => this._db.collection(collection).drop())
            );
        }
    };
}
