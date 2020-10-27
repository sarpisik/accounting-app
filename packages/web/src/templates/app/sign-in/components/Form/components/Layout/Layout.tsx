import React from 'react';
import { FormikErrors, FormikTouched } from 'formik';
import { LocalizedButton, LocalizedInput } from './components';
import { TEST_IDS } from './contants';
import { initialValues } from '../../schema';
import { formLocaleNs } from '../../contants';

interface LayoutProps<Values>
    extends Omit<React.HtmlHTMLAttributes<HTMLFormElement>, 'onSubmit'> {
    errors: FormikErrors<Values>;
    touched: FormikTouched<Values>;
    getFieldProps: any;
    disabled: boolean;
    handleSubmit: Exclude<
        React.HtmlHTMLAttributes<HTMLFormElement>['onSubmit'],
        undefined
    >;
    resetForm: (...args: any[]) => void;
}

export function Layout(
    props: LayoutProps<typeof initialValues>
): React.ReactElement {
    const {
        disabled,
        errors,
        getFieldProps,
        handleSubmit,
        resetForm,
        touched,
    } = props;

    return (
        <form data-testid="sign-in-form" onSubmit={handleSubmit}>
            <LocalizedInput
                disabled={disabled}
                helperText={touched.email ? errors.email : ''}
                error={Boolean(errors.email)}
                label={setLocaleKey('email')}
                kind="email"
                type="email"
                inputProps={TEST_IDS.email}
                {...getFieldProps('email')}
            />
            <LocalizedInput
                disabled={disabled}
                helperText={touched.password ? errors.password : ''}
                error={Boolean(errors.password)}
                label={setLocaleKey('password')}
                kind="password"
                type="password"
                inputProps={TEST_IDS.password}
                {...getFieldProps('password')}
            />
            <LocalizedButton
                data-testid="reset-btn"
                color="secondary"
                content={`${formLocaleNs}.reset`}
                onClick={resetForm}
            />
            <LocalizedButton
                type="submit"
                color="primary"
                content={`${formLocaleNs}.submit`}
            />
        </form>
    );
}

/* --------------------------------- HELPERS -------------------------------- */

function setLocaleKey(key: 'email' | 'password') {
    return `${formLocaleNs}.${key}.label`;
}
