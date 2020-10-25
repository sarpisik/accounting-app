import React from 'react';
import { Router, RouterProps } from '@reach/router';
import { Provider } from 'react-redux';
import { store } from '../../plugins/gatsby-plugin-redux/store';
import { render } from './render';

interface UiOptions {
    ui: Parameters<typeof render>[0];
    reduxStore?: typeof store;
    routerProps?: RouterProps;
}

export function renderWithStoreAndRouter(
    { reduxStore = store, ...uiOptions }: UiOptions,
    renderOptions: Parameters<typeof render>[1] = {
        wrapper({ children }: { children?: React.ReactNode }) {
            return (
                <Provider store={reduxStore}>
                    <Router {...uiOptions.routerProps}>{children}</Router>
                </Provider>
            );
        },
    }
) {
    return render(uiOptions.ui, renderOptions);
}
