import React from 'react';
import { useTranslation } from 'react-i18next';

export function PreLoading(): React.ReactElement {
    const { t } = useTranslation();

    return <p>{t('api.session.preLoading')}</p>;
}
