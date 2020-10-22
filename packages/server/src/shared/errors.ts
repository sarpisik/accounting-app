import { ErrorTypes } from '@shared-types/entities/shared';
import { StatusCodes } from 'http-status-codes';
import {
    createFailed,
    deleteFailed,
    docExist,
    docNotFound,
    emailNotConfirmed,
    invalidPass,
    mutateFailed,
} from './constants';
import { ValidationError as _ValidationError } from 'express-validator';

export class CustomError extends Error {
    constructor(
        public statusCode: number,
        public type: ErrorTypes,
        message: string
    ) {
        super(message);
    }
}

export class ValidationError extends CustomError {
    validations: _ValidationError[];

    constructor(validations: _ValidationError[]) {
        super(
            StatusCodes.BAD_REQUEST,
            ErrorTypes.INVALID_FIELDS,
            'Invalid fields'
        );

        this.validations = validations;
    }
}

export class DocNotFoundError<Q, D> extends CustomError {
    constructor(doc: string, query: Q, data: D) {
        super(
            StatusCodes.BAD_REQUEST,
            ErrorTypes.NOT_FOUND,
            docNotFound(doc, query, data)
        );
    }
}

export class UnAuthorizedError extends CustomError {
    constructor() {
        super(
            StatusCodes.UNAUTHORIZED,
            ErrorTypes.UNAUTHORIZED,
            'Un authorized user.'
        );
    }
}

export class EmailTakenError extends CustomError {
    constructor(email: string) {
        super(
            StatusCodes.BAD_REQUEST,
            ErrorTypes.EMAIL_TAKEN,
            docExist('Email', email)
        );
    }
}

export class EmailNotConfirmedError extends CustomError {
    constructor(email: string) {
        super(
            StatusCodes.BAD_REQUEST,
            ErrorTypes.EMAIL_NOT_CONFIRMED,
            emailNotConfirmed(email)
        );
    }
}

export class PasswordInvalidError extends CustomError {
    constructor(email: string) {
        super(
            StatusCodes.BAD_REQUEST,
            ErrorTypes.PASSWORD_INVALID,
            invalidPass(email)
        );
    }
}

export class CreateFailedError<Q, D> extends CustomError {
    constructor(doc: string, query: Q, data: D) {
        super(
            StatusCodes.BAD_REQUEST,
            ErrorTypes.CREATE_FAILED,
            createFailed(doc, query, data)
        );
    }
}

export class MutateFailedError<Q, D> extends CustomError {
    constructor(doc: string, query: Q, data: D) {
        super(
            StatusCodes.BAD_REQUEST,
            ErrorTypes.MUTATE_FAILED,
            mutateFailed(doc, query, data)
        );
    }
}

export class DeleteFailedError<Q, D> extends CustomError {
    constructor(doc: string, query: Q, data: D) {
        super(
            StatusCodes.BAD_REQUEST,
            ErrorTypes.DELETE_FAILED,
            deleteFailed(doc, query, data)
        );
    }
}
