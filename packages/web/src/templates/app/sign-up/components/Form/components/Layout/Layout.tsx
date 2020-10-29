import React from 'react';
import { Link } from 'gatsby';
import { useTranslation } from 'react-i18next';
import {
    INPUT_EMAIL,
    INPUT_NAME,
    INPUT_PASSWORD,
    PATHS,
} from '../../../../../../../../../shared-types/lib';
import {
    LocalizedSessionButton,
    LocalizedSessionInput,
    SessionFormLayoutProps,
} from '../../../../../../../components';
import { localizedPath } from '../../../../../lib';
import {
    linksLocaleNs,
    signInFormLocaleNs,
    signUpFormLocaleNs,
} from '../../contants';
import { initialValues } from '../../schema';
import { TEST_IDS } from './contants';

export const signUpFormTestId = 'sign-up-form';
export const signInLinkTestId = 'sign-in-link';

export function Layout(
    props: SessionFormLayoutProps<typeof initialValues>
): React.ReactElement {
    const {
            disabled,
            errors,
            getFieldProps,
            handleSubmit,
            resetForm,
            touched,
        } = props,
        { t, i18n } = useTranslation();

    return (
        <form data-testid={signUpFormTestId} onSubmit={handleSubmit}>
            <LocalizedSessionInput
                disabled={disabled}
                helperText={touched.email ? errors.email : ''}
                error={Boolean(errors.email)}
                label={setLocaleKey('email')}
                kind="email"
                helperTextCondition={helperTextCondition}
                helperTextCb={helperTextCb('email')}
                type="email"
                inputProps={TEST_IDS.email}
                {...getFieldProps('email')}
            />
            <LocalizedSessionInput
                disabled={disabled}
                helperText={touched.name ? errors.name : ''}
                error={Boolean(errors.name)}
                label={setLocaleKey('name')}
                kind="name"
                helperTextCondition={helperTextCondition}
                helperTextCb={helperTextCb('name')}
                inputProps={TEST_IDS.name}
                {...getFieldProps('name')}
            />
            <LocalizedSessionInput
                disabled={disabled}
                helperText={touched.password ? errors.password : ''}
                error={Boolean(errors.password)}
                label={setLocaleKey('password')}
                helperTextCondition={helperTextCondition}
                helperTextCb={helperTextCb('password')}
                kind="password"
                type="password"
                inputProps={TEST_IDS.password}
                {...getFieldProps('password')}
            />
            <LocalizedSessionInput
                disabled={disabled}
                helperText={
                    touched.passwordConfirm ? errors.passwordConfirm : ''
                }
                error={Boolean(errors.passwordConfirm)}
                label={setLocaleKey('passwordConfirm')}
                helperTextCondition={helperTextCondition}
                helperTextCb={helperTextCb('passwordConfirm')}
                kind="passwordConfirm"
                type="password"
                inputProps={TEST_IDS.passwordConfirm}
                {...getFieldProps('passwordConfirm')}
            />
            <Link
                data-testid={signInLinkTestId}
                to={localizedPath(
                    i18n.language as Parameters<typeof localizedPath>[0],
                    [PATHS.APP, PATHS.SIGN_IN]
                )}
            >
                {t(linksLocaleNs.concat('.sign-in'))}
            </Link>
            <LocalizedSessionButton
                data-testid="reset-btn"
                color="secondary"
                content={`${signInFormLocaleNs}.reset`}
                onClick={resetForm}
            />
            <LocalizedSessionButton
                type="submit"
                color="primary"
                content={`${signUpFormLocaleNs}.submit`}
            />
        </form>
    );
}

/* ********************************* HELPERS ******************************** */

function setLocaleKey(key: keyof typeof initialValues) {
    let nsKey: string;

    if (key === 'name' || key === 'passwordConfirm') nsKey = signUpFormLocaleNs;
    else nsKey = signInFormLocaleNs;

    return `${nsKey}.${key}.label`;
}

function helperTextCondition(text: string) {
    return text.includes('min') || text.includes('max');
}

function helperTextCb(input: Parameters<typeof setLocaleKey>[0]) {
    return (kind: typeof input) =>
        kind === 'email'
            ? INPUT_EMAIL
            : kind === 'name'
            ? INPUT_NAME
            : INPUT_PASSWORD;
}
