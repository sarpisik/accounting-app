import supertest from 'supertest';

export class Request {
    constructor(private _agent: supertest.SuperTest<supertest.Test>) {}

    static generatePath = (path: string) => `/api/${path}`;

    get = (path: string) => this._agent.get(path);

    post = <Body extends Record<string, unknown>>(path: string, body: Body) =>
        this._agent.post(path).type('form').send(body);

    put = <Body extends Record<string, unknown>>(path: string, body: Body) =>
        this._agent.put(path).type('form').send(body);

    delete = (path: string) => this._agent.delete(path);
}
