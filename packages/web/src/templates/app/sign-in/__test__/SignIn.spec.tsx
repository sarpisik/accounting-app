import React from 'react';
import translates from '../../../../../plugins/gatsby-plugin-i18n/locales/en/translate.json';
import { renderWithStore, screen } from '../../../../../spec';
import { SignIn } from '../SignIn';

describe(`"VIEW:${SignIn.name}"`, () => {
    it('should render', () => {
        renderWithStore({ ui: <SignIn /> });

        expect(screen.getByTestId('sign-in-view')).toBeInTheDocument();
        expect(screen.getByTestId('sign-up-link')).toBeInTheDocument();
        expect(screen.getByTestId('sign-up-link')).toHaveTextContent(
            translates.translations.views['sign-in'].links['sign-up']
        );
    });
});
