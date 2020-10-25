import { Locales } from '../../types';

export enum PATHS {
    APP = 'app',
    SIGN_UP = 'sign-up',
    SIGN_IN = 'sign-in',
}

export function localizedPath(locale: Locales, paths: string[]): string {
    return `/${locale}/`.concat(paths.join('/'));
}
