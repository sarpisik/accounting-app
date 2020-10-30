import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { ErrorTypes } from '../../../../../shared-types/lib/entities/shared';
import {
    ConfirmEmailApi,
    confirmEmailFailed as checkFail,
    IConfirmEmailResponse,
} from '../../../lib';
import { withUser } from '../components';
import { signInValidationErrorConverter } from '../sign-in/components';
import { PageProps } from '../types';
import { withEmail } from './components';
import { confirmEmailTestId, spinnerTestId, translateNs } from './contants';
import { Options, useConfirmEmail } from './hooks';

const OPTIONS: Options<
    IConfirmEmailResponse['success']['payload'],
    IConfirmEmailResponse['error']['type'],
    IConfirmEmailResponse['error']['payload']
> = {
    initialState: {
        status: 'INITIAL',
        content: '',
        type: undefined,
    },
    checkFail,
};

type Status = typeof OPTIONS;

export default withUser(withEmail(ConfirmEmail));

interface Props extends PageProps {
    email: string;
}

export function ConfirmEmail(props: Props): React.ReactElement {
    const { email } = props,
        { status, apiCall } = useConfirmEmail(OPTIONS),
        { t } = useTranslation();

    React.useEffect(
        function requestOnMounedted() {
            apiCall(ConfirmEmailApi.confirmEmail({ email }));
        },
        // Skip dep "apiCall".
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [email]
    );

    const Component =
        status.status === 'LOADING' ? (
            <CircularProgress data-testid={spinnerTestId} color="inherit" />
        ) : status.status === 'ERROR' ? (
            isValidationError(status) ? (
                t(signInValidationErrorConverter(status.content[0].msg))
            ) : (
                t(confirmEmailApiErrorConverter(status.type))
            )
        ) : status.status === 'SUCCESS' ? (
            t(`${translateNs}.success`)
        ) : (
            t(`${translateNs}.initial`)
        );

    return <div data-testid={confirmEmailTestId}>{Component}</div>;
}

function isValidationError(
    status: Status['initialState']
): status is Omit<Status['initialState'], 'content'> & {
    content: Exclude<IConfirmEmailResponse['error']['payload'], string>;
} {
    return status.type === ErrorTypes.INVALID_FIELDS;
}

function confirmEmailApiErrorConverter(errorType?: ErrorTypes) {
    switch (errorType) {
        case ErrorTypes.CREATE_FAILED:
            return nsReducer('createFailed');

        case ErrorTypes.NOT_FOUND:
            return nsReducer('notFound');

        default:
            return 'api.session.unExpectedError';
    }
}

function nsReducer(key: string) {
    return `${translateNs}.error.`.concat(key);
}
