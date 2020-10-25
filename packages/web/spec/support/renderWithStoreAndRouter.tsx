import {
    createHistory,
    createMemorySource,
    LocationProvider,
    LocationProviderProps,
} from '@reach/router';
import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../plugins/gatsby-plugin-redux/store';

interface UiOptions {
    ui: Parameters<typeof render>[0];
    reduxStore?: typeof store;
    path?: string;
    locationProviderProps?: Omit<LocationProviderProps, 'history'> & {
        history: Exclude<LocationProviderProps['history'], undefined>;
    };
}

export function renderWithStoreAndRouter(
    {
        reduxStore = store,
        path = '/',
        locationProviderProps = {
            history: createHistory(createMemorySource(path)),
        },
        ...uiOptions
    }: UiOptions,
    renderOptions: Parameters<typeof render>[1] = {
        wrapper({ children }: { children?: React.ReactNode }) {
            return (
                <Provider store={reduxStore}>
                    <LocationProvider {...locationProviderProps}>
                        {children}
                    </LocationProvider>
                </Provider>
            );
        },
    }
) {
    return {
        ...render(uiOptions.ui, renderOptions),
        history: locationProviderProps.history,
    };
}
