import { Request, Response, NextFunction } from 'express';

export type ReqType = Request;
export type ResType<Body> = Response<Body>;

export function withCatchError<
    Req extends ReqType,
    ResBody = unknown,
    Res extends ResType<ResBody> = ResType<ResBody>
>(
    wrappedController: (
        req: Req,
        res: Res,
        next: NextFunction
    ) => Promise<unknown>
) {
    return function wrapperController(
        ...params: Parameters<typeof wrappedController>
    ) {
        return wrappedController(...params).catch(params[2]);
    };
}
