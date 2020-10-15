import { RequestHandler } from 'express';

export default function withCatchError<
    P = any,
    ResBody = any,
    ReqBody = any,
    ReqQuery = any
>(wrappedController: RequestHandler<P, ResBody, ReqBody, ReqQuery>) {
    return function wrapperController(
        ...params: Parameters<typeof wrappedController>
    ) {
        return wrappedController(...params).catch(params[2]);
    };
}
