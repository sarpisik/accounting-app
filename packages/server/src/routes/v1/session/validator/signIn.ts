import {
    EmailValidationErrors,
    PasswordValidationErrors,
} from '@shared-types/entities/shared';
import { INPUT_PASSWORD } from '@shared-types/inputFields';
import { check } from 'express-validator';
import { Validator } from '../../shared';

const email = check('email')
        .isEmail()
        .withMessage(EmailValidationErrors.INVALID_EMAIL)
        .isLength({ min: 4, max: 200 })
        .withMessage(EmailValidationErrors.INVALID_EMAIL_LENGTH)
        .normalizeEmail({ gmail_remove_dots: false })
        .withMessage(EmailValidationErrors.EMPTY_EMAIL),
    password = check('password')
        .notEmpty()
        .withMessage(PasswordValidationErrors.EMPTY_PASSWORD)
        .isLength(INPUT_PASSWORD)
        .isString()
        .withMessage(PasswordValidationErrors.INVALID_PASSWORD_LENGTH);

export class SignInValidator extends Validator {
    constructor() {
        super([email, password]);
    }
}
