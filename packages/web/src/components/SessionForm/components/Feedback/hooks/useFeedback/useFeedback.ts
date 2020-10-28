import { useTranslation } from 'react-i18next';

export function useFeedback<ErrorTypes, Content>(
    apiErrorConverter: (errorType: ErrorTypes) => string,
    errorType: ErrorTypes | undefined,
    content: string | Content
): string {
    const { t } = useTranslation();

    return typeof errorType !== 'undefined'
        ? t(apiErrorConverter(errorType))
        : typeof content === 'string'
        ? content
        : '';
}
