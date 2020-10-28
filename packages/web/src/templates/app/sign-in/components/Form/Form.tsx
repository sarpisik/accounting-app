import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import {
    EmailValidationErrors,
    ErrorTypes,
    PasswordValidationErrors,
} from '../../../../../../../shared-types/lib/entities/shared';
import { getAuthSuccess } from '../../../../../../plugins/gatsby-plugin-redux/store';
import { SessionForm } from '../../../../../components';
import { ISignInResponse, SignInApi, signInFailed } from '../../../../../lib';
import { Layout } from './components';
import { errorLocaleNs, formLocaleNs } from './contants';
import { initialValues, validationSchema } from './schema';

interface FormProps {
    // Necessary for testing.
    initialState?: typeof initialValues;
}

export function Form(props: FormProps): React.ReactElement {
    const { initialState = initialValues } = props,
        dispatch = useDispatch(),
        { t } = useTranslation();

    return (
        <SessionForm<
            typeof initialState,
            ISignInResponse['success']['payload'],
            ErrorTypes,
            ISignInResponse
        >
            formikProps={{ initialValues: initialState, validationSchema }}
            eventHandlers={{
                api: SignInApi.signInUser,
                checkFail: signInFailed,
                successCb(_state, payload) {
                    dispatch(getAuthSuccess(payload));
                    return t('views.sign-in.success');
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
        case ErrorTypes.EMAIL_NOT_CONFIRMED:
            return nsReducer('emailNotConfirmed');
        case ErrorTypes.PASSWORD_INVALID:
            return nsReducer('passwordInvalid');

        default:
            return 'api.session.unExpectedError';
    }
}
function nsReducer(key: string, ns = errorLocaleNs) {
    return `${ns}.`.concat(key);
}

function validationErrorConverter(
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
