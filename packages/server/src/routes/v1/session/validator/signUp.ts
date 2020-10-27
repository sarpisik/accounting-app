import {
    EmailValidationErrors,
    PasswordValidationErrors,
    UserNameValidationErrors,
} from '@shared-types/entities/shared';
import {
    INPUT_EMAIL,
    INPUT_NAME,
    INPUT_PASSWORD,
} from '@shared-types/inputFields';
import { check } from 'express-validator';
import { Validator } from '../../shared';

const email = check('email')
        .isEmail()
        .withMessage(EmailValidationErrors.INVALID_EMAIL)
        .isLength(INPUT_EMAIL)
        .withMessage(EmailValidationErrors.INVALID_EMAIL_LENGTH)
        .normalizeEmail({ gmail_remove_dots: false })
        .withMessage(EmailValidationErrors.EMPTY_EMAIL),
    name = check('name')
        .isLength(INPUT_NAME)
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
