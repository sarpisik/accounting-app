import React from 'react';
import { useTranslation } from 'react-i18next';
import {
    EmailValidationErrors,
    ErrorTypes,
    PasswordValidationErrors,
    UserNameValidationErrors,
} from '../../../../../../../shared-types/lib/entities/shared';
import { ISignUpResponse, SignUpApi, signUpFailed } from '../../../../../lib';
import { SessionForm } from '../../../components';
import {
    signInApiErrorConverter,
    signInValidationErrorConverter,
} from '../../../sign-in/components';
import { Layout } from './components';
import { errorLocaleNs, signUpFormLocaleNs, signUpLocaleNs } from './contants';
import { initialValues, validationSchema } from './schema';

interface FormProps {
    // Necessary for testing.
    initialState?: typeof initialValues;
}

export function Form(props: FormProps): React.ReactElement {
    const { initialState = initialValues } = props,
        { t } = useTranslation();

    return (
        <SessionForm<
            typeof initialState,
            ISignUpResponse['success']['payload'],
            ErrorTypes,
            ISignUpResponse
        >
            formikProps={{ initialValues: initialState, validationSchema }}
            eventHandlers={{
                api: SignUpApi.signUpUser,
                checkFail: signUpFailed,
                successCb({ email }) {
                    return t(`${signUpLocaleNs}.success`, { email });
                },
            }}
            apiErrorConverter={apiErrorConverter}
            validationErrorConverter={validationErrorConverter}
            LayoutComponent={Layout}
        />
    );
}

function apiErrorConverter(errorType: ErrorTypes) {
    switch (errorType) {
        case ErrorTypes.EMAIL_TAKEN:
            return nsReducer('emailTaken');
        default:
            return signInApiErrorConverter(errorType);
    }
}

function nsReducer(key: string, ns = errorLocaleNs) {
    return `${ns}.`.concat(key);
}

function validationErrorConverter(
    msg: EmailValidationErrors | PasswordValidationErrors | string
) {
    switch (msg) {
        case UserNameValidationErrors.INVALID_NAME_LENGTH:
            return setNameLocaleNs('invalidLength');
        case PasswordValidationErrors.PASSWORDS_NOT_MATCH:
            return setPasswordConfirmLocaleNs('passwordsDoNotMatch');
        default:
            return signInValidationErrorConverter(msg);
    }
}

function setNameLocaleNs(ns: string) {
    return `${signUpFormLocaleNs}.name.error.`.concat(ns);
}
function setPasswordConfirmLocaleNs(ns: string) {
    return `${signUpFormLocaleNs}.passwordConfirm.error.`.concat(ns);
}
