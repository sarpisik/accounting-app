import * as yup from 'yup';
import {
    INPUT_EMAIL,
    INPUT_PASSWORD,
} from '../../../../../../../shared-types/lib';
import { SignInApi } from '../../../../../lib/api/session/signIn';
import { formLocaleNs } from './contants';

export const initialValues: Parameters<typeof SignInApi['signInUser']>[0] = {
    email: '',
    password: '',
};

export type Values = typeof initialValues;

export const validationSchema = yup.object({
    email: yup
        .string()
        .email(setErrorTranslateKey('email', 'invalid'))
        .min(INPUT_EMAIL.min, setErrorTranslateKey('email', 'min'))
        .max(INPUT_EMAIL.max, setErrorTranslateKey('email', 'max'))
        .required(setErrorTranslateKey('email', 'required')),
    password: yup
        .string()
        .min(INPUT_PASSWORD.min, setErrorTranslateKey('password', 'min'))
        .max(INPUT_PASSWORD.max, setErrorTranslateKey('password', 'max'))
        .required(setErrorTranslateKey('password', 'required')),
});

function setErrorTranslateKey(key: 'email' | 'password', field: string) {
    return `${formLocaleNs}.${key}.error.`.concat(field);
}
