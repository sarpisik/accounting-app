import React from 'react';
import { renderWithStore, screen } from '../../../../../spec';
import { signInLinkTestId } from '../components/Form/components';
import { SignUp, signUpTestId } from '../SignUp';
import translates from '../../../../../plugins/gatsby-plugin-i18n/locales/en/translate.json';

describe(`"VIEW:${SignUp.name}"`, () => {
    it('renders', () => {
        renderWithStore({ ui: <SignUp /> });

        expect(screen.getByTestId(signUpTestId)).toBeInTheDocument();
        expect(screen.getByTestId(signInLinkTestId)).toBeInTheDocument();
        expect(screen.getByTestId(signInLinkTestId)).toHaveTextContent(
            translates.translations.views['sign-up'].links['sign-in']
        );
    });
});
