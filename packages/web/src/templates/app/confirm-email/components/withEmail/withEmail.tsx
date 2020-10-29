import React from 'react';
import { useLocation } from '@reach/router';
import { parse } from 'query-string';
import { useTranslation } from 'react-i18next';
import { translateNs } from '../../contants';

export const invalidEmailTestId = 'invalid-email-query';

export function withEmail<P extends { email: string }>(
    WrappedComponent: React.ComponentType<P>
) {
    return function WithEmail(props: Omit<P, 'email'>): React.ReactElement {
        const location = useLocation(),
            { t } = useTranslation(),
            queries = parse(location.search),
            email = queries.email,
            invalidEmail = typeof email !== 'string';

        if (invalidEmail)
            return (
                <p data-testid={invalidEmailTestId}>
                    {t(`${translateNs}.error.invalidEmailQuery`)}
                </p>
            );

        return <WrappedComponent {...(props as P)} email={email} />;
    };
}
