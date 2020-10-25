import React from 'react';
import { useTranslation } from 'react-i18next';

export function UnExpectedError(): React.ReactElement {
    const { t } = useTranslation();

    return <p>{t('api.session.unExpectedError')}</p>;
}
