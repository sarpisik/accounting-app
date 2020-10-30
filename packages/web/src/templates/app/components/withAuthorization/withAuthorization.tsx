import React from 'react';
import { UnExpectedError } from './components';
import { useAuthorization } from './hooks';

export function withAuthorization<P>(
    WrappedPage: React.ComponentType<P>
): (props: React.ComponentProps<typeof WrappedPage>) => React.ReactElement {
    return function WithAuthorization(
        props: React.ComponentProps<typeof WrappedPage>
    ): React.ReactElement {
        const auth = useAuthorization();

        if (auth.status === 'ERROR') return <UnExpectedError />;

        if (!auth.user) return null;

        return <WrappedPage {...props} />;
    };
}
