import {
    EmailValidationErrors,
    PasswordValidationErrors,
    UserNameValidationErrors,
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
    name = check('name')
        .isLength({ min: 1, max: 100 })
        .withMessage(UserNameValidationErrors.INVALID_NAME_LENGTH),
    password = check('password')
        .isLength(INPUT_PASSWORD)
        .isString()
        .withMessage(PasswordValidationErrors.INVALID_PASSWORD_LENGTH)
        .custom((value, { req }) => {
            if (value !== req.body.passwordConfirm)
                throw new Error(PasswordValidationErrors.PASSWORDS_NOT_MATCH);

            return value;
        });

export class SignUpValidator extends Validator {
    constructor() {
        super([email, name, password]);
    }
}
