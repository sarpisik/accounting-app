import { ErrorTypes } from '../../../../../../../../shared-types/lib/entities/shared';
import { Status } from '../useFormEvent';

export function useStatusError(
    status: Status,
    validationErrorConverter: (msg: string) => string
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
            errors: { [param]: validationErrorConverter(msg) },
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
