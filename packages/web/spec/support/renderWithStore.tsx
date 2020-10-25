import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../plugins/gatsby-plugin-redux/store';
import { render } from './render';

interface UiOptions {
    ui: Parameters<typeof render>[0];
    reduxStore?: typeof store;
}

export function renderWithStore(
    { reduxStore = store, ...uiOptions }: UiOptions,
    renderOptions: Parameters<typeof render>[1] = {
        wrapper({ children }: { children?: React.ReactNode }) {
            return <Provider store={reduxStore}>{children}</Provider>;
        },
    }
) {
    return render(uiOptions.ui, renderOptions);
}
