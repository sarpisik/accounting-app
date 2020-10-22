import { ValidationError } from '@shared/errors';
import { ValidationChain, validationResult } from 'express-validator';
import { withCatchError } from '../middlewares';

interface FieldsValidatorType {
    fields: ValidationChain[];
}

export class Validator implements FieldsValidatorType {
    fields: ValidationChain[];

    constructor(fields: ValidationChain[]) {
        this.fields = fields.map(trimAndEscape);
    }

    validate = withCatchError(async (req, _res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) throw new ValidationError(errors.array());

        next();
    });
}

function trimAndEscape(chain: ValidationChain) {
    return chain.trim().escape();
}
