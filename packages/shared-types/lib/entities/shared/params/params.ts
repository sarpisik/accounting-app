export interface ResBody<S, T extends ErrorTypes = any, E = unknown> {
    success: {
        status: 'SUCCESS';
        payload: S;
    };
    error: {
        status: 'ERROR';
        type: T;
        payload?: E;
    };
}

export const enum ErrorTypes {
    BAD_REQUEST = 'BAD_REQUEST',
    UNAUTHORIZED = 'UNAUTHORIZED',
    NOT_FOUND = 'NOT_FOUND',
    MUTATE_FAILED = 'MUTATE_FAILED',
    DELETE_FAILED = 'DELETE_FAILED',
}
