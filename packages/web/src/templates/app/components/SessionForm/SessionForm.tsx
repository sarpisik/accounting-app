import React from 'react';
import { FormikConfig, FormikErrors, FormikTouched, useFormik } from 'formik';
import {
    ErrorTypes,
    ResBody,
} from '../../../../../../shared-types/lib/entities/shared';
import { ValidationError } from '../../../../types/errors';
import { Feedback } from './components';
import { FormEventParams, useFormEvent, useStatusError } from './hooks';

export interface SessionFormLayoutProps<Values>
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

interface FormProps<
    FormValues,
    Success,
    ErType extends ErrorTypes,
    ApiResponse extends ResBody<Success, ErType, string | ValidationError[]>
> extends Pick<React.ComponentProps<typeof Feedback>, 'apiErrorConverter'> {
    formikProps: Omit<FormikConfig<FormValues>, 'onSubmit'>;
    eventHandlers: FormEventParams<FormValues, Success, ErType, ApiResponse>;
    validationErrorConverter: Parameters<typeof useStatusError>[1];
    LayoutComponent: React.ComponentType<SessionFormLayoutProps<FormValues>>;
}

export function SessionForm<
    FormValues,
    Success,
    ErType extends ErrorTypes,
    ApiResponse extends ResBody<Success, ErType, string | ValidationError[]>
>(
    props: FormProps<FormValues, Success, ErType, ApiResponse>
): React.ReactElement {
    const {
            apiErrorConverter,
            eventHandlers,
            formikProps,
            LayoutComponent,
            validationErrorConverter,
        } = props,
        /* ******************************* FORM EVENTS ****************************** */
        { onSubmit, setInitialStatus, status } = useFormEvent(eventHandlers),
        /* ********************** SERVER SIDE VALIDATION ERRORS ********************* */
        errors = useStatusError(status, validationErrorConverter),
        /* ******************************* FORM STATE ******************************* */
        { resetForm, ...formik } = useFormik(
            Object.assign({}, formikProps, { onSubmit })
        );
    React.useEffect(() => {
        const shouldReset = status.status === 'SUCCESS';
        if (shouldReset) resetForm();
        // Skip dep "resetForm".
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [status.status]);

    return (
        <React.Fragment>
            <Feedback
                onFeedbackClick={setInitialStatus}
                apiErrorConverter={apiErrorConverter}
                {...status}
            />
            <LayoutComponent
                disabled={status.status === 'LOADING'}
                resetForm={resetForm}
                {...Object.assign({}, formik, errors)}
            />
        </React.Fragment>
    );
}
