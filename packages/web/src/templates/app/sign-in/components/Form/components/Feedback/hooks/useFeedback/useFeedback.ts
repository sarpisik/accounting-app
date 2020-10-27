import { useTranslation } from 'react-i18next';
import { ErrorTypes } from '../../../../../../../../../../../shared-types/lib/entities/shared';
import { errorLocaleNs } from '../../../../contants';

export function useFeedback(errorType?: ErrorTypes): string {
    const { t } = useTranslation();

    return typeof errorType !== 'undefined' ? t(errorConverter(errorType)) : '';
}

function errorConverter(errorType: ErrorTypes) {
    switch (errorType) {
        case ErrorTypes.EMAIL_NOT_CONFIRMED:
            return nsReducer('emailNotConfirmed');
        case ErrorTypes.PASSWORD_INVALID:
            return nsReducer('passwordInvalid');

        default:
            return 'api.session.unExpectedError';
    }
}

function nsReducer(key: string, ns = errorLocaleNs) {
    return `${ns}.`.concat(key);
}
