import { Api } from './api';

export class ApiWithCredentials extends Api {
    constructor(path: ConstructorParameters<typeof Api>[0]) {
        super(path, { credentials: 'same-origin' });
    }
}
