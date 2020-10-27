import React from 'react';
import { useFormik } from 'formik';
import { Feedback, Layout } from './components';
import { useFormEvent, useStatusError } from './hooks';
import { initialValues, validationSchema } from './schema';

interface FormProps {
    // Necessary for testing.
    initialState?: typeof initialValues;
}

export function Form(props: FormProps): React.ReactElement {
    const { initialState = initialValues } = props,
        { onSubmit, setInitialStatus, status } = useFormEvent(),
        errors = useStatusError(status),
        { resetForm, ...formik } = useFormik({
            initialValues: initialState,
            validationSchema,
            onSubmit,
        });

    return (
        <React.Fragment>
            <Feedback onFeedbackClick={setInitialStatus} {...status} />
            <Layout
                disabled={status.status === 'LOADING'}
                resetForm={resetForm}
                {...Object.assign({}, formik, errors)}
            />
        </React.Fragment>
    );
}
