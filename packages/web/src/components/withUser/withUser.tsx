import React from 'react';
import { useNavigate } from './hooks';

export function withUser<P>(WrappedComponent: React.ComponentType<P>) {
    return function WithUser(
        props: React.ComponentProps<typeof WrappedComponent>
    ) {
        // Navigates to dashboard if authorized already.
        useNavigate();

        return <WrappedComponent {...props} />;
    };
}