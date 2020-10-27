import React from 'react';
import { renderWithStore, screen } from '../../../../../spec';
import { SignIn } from '../SignIn';

describe(`"VIEW:${SignIn.name}"`, () => {
    it('should render', () => {
        renderWithStore({ ui: <SignIn /> });

        expect(screen.getByTestId('sign-in-view')).toBeInTheDocument();
    });
});
