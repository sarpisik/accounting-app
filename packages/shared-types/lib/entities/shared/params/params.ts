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

export enum ErrorTypes {
    INVALID_FIELDS = 'INVALID_FIELDS',
    BAD_REQUEST = 'BAD_REQUEST',
    UNAUTHORIZED = 'UNAUTHORIZED',
    NOT_FOUND = 'NOT_FOUND',
    CREATE_FAILED = 'CREATE_FAILED',
    MUTATE_FAILED = 'MUTATE_FAILED',
    DELETE_FAILED = 'DELETE_FAILED',
    PASSWORD_INVALID = 'PASSWORD_INVALID',
    EMAIL_TAKEN = 'EMAIL_TAKEN',
    EMAIL_NOT_CONFIRMED = 'EMAIL_NOT_CONFIRMED',
}

export enum MongoErrors {
    INVALID_ID = 'INVALID_ID',
}

export enum EmailValidationErrors {
    INVALID_EMAIL = 'INVALID_EMAIL',
    INVALID_EMAIL_LENGTH = 'INVALID_EMAIL_LENGTH',
    EMPTY_EMAIL = 'EMPTY_EMAIL',
}

export enum UserNameValidationErrors {
    INVALID_NAME_LENGTH = 'INVALID_NAME_LENGTH',
}

export enum PasswordValidationErrors {
    EMPTY_PASSWORD = 'EMPTY_PASSWORD',
    INVALID_PASSWORD_LENGTH = 'INVALID_PASSWORD_LENGTH',
    PASSWORDS_NOT_MATCH = 'PASSWORDS_NOT_MATCH',
}
