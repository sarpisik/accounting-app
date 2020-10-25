import React from 'react';
import { Locales, PageProps } from '../../templates/app/types';
import { Loading, PreLoading } from './components';
import { useAuthentication } from './hooks';

export interface WrappedPageProps extends PageProps {
    pageContext: {
        locale: Locales;
    };
}

export function withAuthentication<P extends WrappedPageProps>(
    WrappedPage: React.ComponentType<P>
): (props: React.ComponentProps<typeof WrappedPage>) => React.ReactElement {
    return function WithAuthentication(
        props: React.ComponentProps<typeof WrappedPage>
    ): React.ReactElement {
        const status = useAuthentication();

        switch (status) {
            case 'INITIAL':
                return <PreLoading />;

            case 'LOADING':
                return <Loading />;

            default:
                return <WrappedPage {...props} />;
        }
    };
}
