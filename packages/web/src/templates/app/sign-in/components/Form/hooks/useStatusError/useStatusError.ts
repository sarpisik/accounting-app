import {
    EmailValidationErrors,
    ErrorTypes,
    PasswordValidationErrors,
} from '../../../../../../../../../shared-types/lib/entities/shared';
import { formLocaleNs } from '../../contants';
import { Status } from '../useFormEvent';

export function useStatusError(
    status: Status
):
    | {
          touched: {
              [x: string]: boolean;
          };
          errors: {
              [x: string]: string;
          };
      }
    | {} {
    if (validationError(status)) {
        const { param, msg } = status.content[0];

        return {
            touched: { [param]: true },
            errors: { [param]: errorConverter(msg) },
        };
    }

    return {};
}

/* --------------------------------- HELPERS -------------------------------- */

function validationError(
    status: Status
): status is Omit<Status, 'content'> & {
    content: Exclude<Status['content'], string>;
} {
    return status.type === ErrorTypes.INVALID_FIELDS;
}

function errorConverter(
    msg: EmailValidationErrors | PasswordValidationErrors | string
) {
    switch (msg) {
        case EmailValidationErrors.EMPTY_EMAIL:
            return setLocaleNs('email.error.required');
        case EmailValidationErrors.INVALID_EMAIL:
            return setLocaleNs('email.error.invalid');
        case EmailValidationErrors.INVALID_EMAIL_LENGTH:
            return setLocaleNs('email.error.invalidLength');
        case PasswordValidationErrors.EMPTY_PASSWORD:
            return setLocaleNs('password.error.required');
        case PasswordValidationErrors.INVALID_PASSWORD_LENGTH:
            return setLocaleNs('password.error.invalidLength');

        default:
            return 'api.session.unExpectedError';
    }
}

function setLocaleNs(ns: string) {
    return `${formLocaleNs}.`.concat(ns);
}
