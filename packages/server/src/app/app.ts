import helmet from 'helmet';
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

        return app;
    }
}
