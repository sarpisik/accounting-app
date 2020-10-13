import React from 'react';
import { useTranslation } from 'react-i18next';

export default function App(): React.ReactElement {
    const { t } = useTranslation();
    console.log(t('app.links.accounts'));
    return <div>App</div>;
}
