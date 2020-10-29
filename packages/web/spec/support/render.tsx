import React from 'react';
import { Router } from '@reach/router';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../plugins/gatsby-plugin-redux/store';

function render(
    ui: Parameters<typeof rtlRender>[0],
    renderOptions: Parameters<typeof rtlRender>[1] = {
        wrapper({ children }: { children?: React.ReactNode }) {
            return (
                <Provider store={store}>
                    <Router>{children}</Router>
                </Provider>
            );
        },
    }
) {
    return rtlRender(ui, renderOptions);
}

export * from '@testing-library/react';
export { render };
