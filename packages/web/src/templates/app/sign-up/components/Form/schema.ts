import * as yup from 'yup';
import {
    INPUT_EMAIL,
    INPUT_NAME,
    INPUT_PASSWORD,
} from '../../../../../../../shared-types/lib';
import { SignUpApi } from '../../../../../lib';
import { signInFormLocaleNs, signUpFormLocaleNs } from './contants';

export const initialValues: Parameters<typeof SignUpApi['signUpUser']>[0] = {
    email: '',
    name: '',
    password: '',
    passwordConfirm: '',
    locale: '',
};

export type Values = typeof initialValues;

export const validationSchema = yup.object({
    email: yup
        .string()
        .email(setErrorTranslateKey('email', 'invalid', signInFormLocaleNs))
        .min(
            INPUT_EMAIL.min,
            setErrorTranslateKey('email', 'min', signInFormLocaleNs)
        )
        .max(
            INPUT_EMAIL.max,
            setErrorTranslateKey('email', 'max', signInFormLocaleNs)
        )
        .required(
            setErrorTranslateKey('email', 'required', signInFormLocaleNs)
        ),
    name: yup
        .string()
        .min(INPUT_NAME.min, setErrorTranslateKey('name', 'min'))
        .max(INPUT_NAME.max, setErrorTranslateKey('name', 'max'))
        .required(setErrorTranslateKey('name', 'required')),
    password: yup
        .string()
        .min(
            INPUT_PASSWORD.min,
            setErrorTranslateKey('password', 'min', signInFormLocaleNs)
        )
        .max(
            INPUT_PASSWORD.max,
            setErrorTranslateKey('password', 'max', signInFormLocaleNs)
        )
        .required(
            setErrorTranslateKey('password', 'required', signInFormLocaleNs)
        ),
    passwordConfirm: yup
        .string()
        .oneOf(
            [yup.ref('password')],
            setErrorTranslateKey('passwordConfirm', 'passwordsDoNotMatch')
        )
        .required(setErrorTranslateKey('passwordConfirm', 'required')),
});

function setErrorTranslateKey(
    key: 'email' | 'password' | 'passwordConfirm' | 'name',
    field: string,
    formLocale = signUpFormLocaleNs
) {
    return `${formLocale}.${key}.error.`.concat(field);
}
