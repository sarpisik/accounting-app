import { ErrorTypes, ResBody } from '@shared-types/entities/shared';
import logger from './Logger';
import assert from 'assert';
import { STATUS } from './constants';

export const pErr = (err: Error) => {
    err && logger.error(err);
};

export const getRandomInt = () => {
    return Math.floor(Math.random() * 1_000_000_000_000);
};

export type SuccessPayload<P> = ResBody<P>['success'];
export function successPayload<P>(payload: P): SuccessPayload<P> {
    return { status: STATUS.SUCCESS, payload };
}
export function errorPayload<T extends ErrorTypes, P>(
    type: T,
    payload: P
): ResBody<P>['error'] {
    return { status: STATUS.ERROR, type, payload };
}
export function getEnv(name: string): string {
    const env = process.env[name];
    assert(env, `ENV variable ${name} must be defined`);

    return env as string;
}
