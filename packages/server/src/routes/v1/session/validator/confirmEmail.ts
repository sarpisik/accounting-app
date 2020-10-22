import { EmailValidationErrors } from '@shared-types/entities/shared';
import { check } from 'express-validator';
import { Validator } from '../../shared';

const email = check('email')
    .isEmail()
    .withMessage(EmailValidationErrors.INVALID_EMAIL)
    .isLength({ min: 4, max: 200 })
    .withMessage(EmailValidationErrors.INVALID_EMAIL_LENGTH)
    .normalizeEmail({ gmail_remove_dots: false })
    .withMessage(EmailValidationErrors.EMPTY_EMAIL);

export class ConfirmEmailValidator extends Validator {
    constructor() {
        super([email]);
    }
}
