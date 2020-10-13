import React from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
    locale?: string;
    children: React.ReactNode;
}

export default function PageWrapper(props: Props): React.ReactElement {
    const { i18n } = useTranslation();
    const locale = props.locale;

    React.useEffect(() => {
        locale && i18n.changeLanguage(locale);

        // skip dep i18n
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [locale]);

    return <React.Fragment>{props.children}</React.Fragment>;
}
