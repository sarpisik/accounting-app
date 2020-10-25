import React from 'react';
import { useTranslation } from 'react-i18next';

export function UnExpectedError(): React.ReactElement {
    const { t } = useTranslation();

    return (
        <p data-testid="un-expected-error">
            {t('api.session.unExpectedError')}
        </p>
    );
}
