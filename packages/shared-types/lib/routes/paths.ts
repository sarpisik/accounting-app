export enum PATHS {
    /* **************************** SERVER-SIDE ONLY **************************** */
    SESSION = '',

    /* **************************** CLIENT-SIDE ONLY **************************** */
    APP = 'app',

    /* ****************************** SHARED PATHS ****************************** */
    SIGN_UP = 'sign-up',
    SIGN_IN = 'sign-in',
    CONFIRM_EMAIL = 'confirm-email',
    SIGN_OUT = 'sign-out',
}

export function pathWithLeadSlash(path: PATHS) {
    return '/'.concat(path);
}
