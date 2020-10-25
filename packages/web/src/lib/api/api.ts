interface HttpResponse<Body> extends Response {
    parsedBody: Body;
}

type FetchParams = Parameters<typeof fetch>;
type BaseRequestOptions = FetchParams[1];
type RequestOptions<Body = unknown> = Omit<BaseRequestOptions, 'body'> & {
    body?: Body;
    subPath?: string;
};

async function customFetch<B>(
    ...params: FetchParams
): Promise<HttpResponse<B>> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    const response: HttpResponse<B> = await fetch(...params);
    if (response.body) response.parsedBody = await response.json();
    return response;
}

export class Api {
    constructor(
        public path: string,
        private _config: BaseRequestOptions = Object.create(null)
    ) {}

    protected _withJson: <R>(
        request: Promise<HttpResponse<R>>
    ) => Promise<HttpResponse<R>> = async (request) => {
        const response = await request;
        response.parsedBody = await response.json();
        return response;
    };

    protected _getRequest: <Response, ReqBody = unknown>(
        options?: RequestOptions<ReqBody>
    ) => Promise<HttpResponse<Response>> = (options = Object.create(null)) =>
        customFetch(
            this.path.concat(options.subPath || ''),
            Object.assign(Object.create(null), this._config, options, {
                method: 'get',
            })
        );

    protected _postRequest: <Response, ReqBody = unknown>(
        options?: RequestOptions<ReqBody>
    ) => Promise<HttpResponse<Response>> = (options = Object.create(null)) =>
        customFetch(
            this.path.concat(options.subPath || ''),
            Object.assign(Object.create(null), this._config, options, {
                method: 'post',
                body: JSON.stringify(options.body),
            })
        );

    protected _putRequest: <Response, ReqBody = unknown>(
        options?: RequestOptions<ReqBody>
    ) => Promise<HttpResponse<Response>> = (options = Object.create(null)) =>
        customFetch(
            this.path.concat(options.subPath || ''),
            Object.assign(Object.create(null), this._config, options, {
                method: 'put',
                body: JSON.stringify(options.body),
            })
        );

    protected _deleteRequest: <R>(
        options?: RequestOptions
    ) => Promise<HttpResponse<R>> = (options = Object.create(null)) =>
        customFetch(
            this.path.concat(options.subPath || ''),
            Object.assign(Object.create(null), this._config, options, {
                method: 'delete',
                body: JSON.stringify(options.body),
            })
        );
}
