export enum PATHS {
    SESSION = '',
    SIGN_UP = 'sign-up',
    SIGN_IN = 'sign-in',
    CONFIRM_EMAIL = 'confirm-email',
    SIGN_OUT = 'sign-out',
}

export function pathWithLeadSlash(path: PATHS) {
    return '/'.concat(path);
}
