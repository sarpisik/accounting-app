import { ErrorTypes } from '@shared-types/entities/shared';
import { StatusCodes } from 'http-status-codes';
import { deleteFailed, docNotFound, mutateFailed } from './constants';

export class CustomError extends Error {
    constructor(
        public statusCode: number,
        public type: ErrorTypes,
        message: string
    ) {
        super(message);
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
