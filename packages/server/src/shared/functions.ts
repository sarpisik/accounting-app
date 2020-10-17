import { ErrorTypes, ResBody } from '@shared-types/entities/shared';
import logger from './Logger';

export const pErr = (err: Error) => {
    err && logger.error(err);
};

export const getRandomInt = () => {
    return Math.floor(Math.random() * 1_000_000_000_000);
};

export type SuccessPayload<P> = ResBody<P>['success'];
export function successPayload<P>(payload: P): SuccessPayload<P> {
    return { status: 'SUCCESS', payload };
}
export function errorPayload<T extends ErrorTypes, P>(
    type: T,
    payload: P
): ResBody<P>['error'] {
    return { status: 'ERROR', type, payload };
}
