import React from 'react';
import { useTranslation } from 'react-i18next';

export function Loading(): React.ReactElement {
    const { t } = useTranslation();

    return <p>{t('api.session.loading')}</p>;
}
