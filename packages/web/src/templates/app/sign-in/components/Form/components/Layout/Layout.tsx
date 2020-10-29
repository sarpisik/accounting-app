import React from 'react';
import { Link } from 'gatsby';
import { useTranslation } from 'react-i18next';
import {
    INPUT_EMAIL,
    INPUT_PASSWORD,
    PATHS,
} from '../../../../../../../../../shared-types/lib';
import {
    LocalizedSessionButton,
    LocalizedSessionInput,
    SessionFormLayoutProps,
} from '../../../../../../../components';
import { localizedPath } from '../../../../../lib';
import { formLocaleNs, linksLocaleNs } from '../../contants';
import { initialValues } from '../../schema';
import { TEST_IDS } from './contants';

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
        <form data-testid="sign-in-form" onSubmit={handleSubmit}>
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
            <Link
                data-testid="sign-up-link"
                to={localizedPath(
                    i18n.language as Parameters<typeof localizedPath>[0],
                    [PATHS.APP, PATHS.SIGN_UP]
                )}
            >
                {t(linksLocaleNs.concat('.sign-up'))}
            </Link>
            <LocalizedSessionButton
                data-testid="reset-btn"
                color="secondary"
                content={`${formLocaleNs}.reset`}
                onClick={resetForm}
            />
            <LocalizedSessionButton
                type="submit"
                color="primary"
                content={`${formLocaleNs}.submit`}
            />
        </form>
    );
}

/* ********************************* HELPERS ******************************** */

function setLocaleKey(key: 'email' | 'password') {
    return `${formLocaleNs}.${key}.label`;
}

function helperTextCondition(text: string) {
    return text.includes('min') || text.includes('max');
}

function helperTextCb(input: 'email' | 'password') {
    return (kind: typeof input) =>
        kind === 'email' ? INPUT_EMAIL : INPUT_PASSWORD;
}
