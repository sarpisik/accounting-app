import React from 'react';
import { PATHS } from '../../../../../../../../shared-types/lib';
import { renderWithStoreAndRouter, screen } from '../../../../../../../spec';
import { invalidEmailTestId, withEmail } from '../withEmail';
import translates from '../../../../../../../plugins/gatsby-plugin-i18n/locales/en/translate.json';

describe(`"HOC:${withEmail.name}"`, () => {
    const email = 'test@example.com',
        invalidEmailQueryText =
            translates.translations.views['confirm-email'].error
                .invalidEmailQuery,
        WrappedComponent: React.FC<{ email: typeof email }> = (props) => (
            <p>{props.email}</p>
        );

    /*******************************************************************************
     **                                   SUCCESS
     *******************************************************************************/
    it('renders wrapped component on valid query', () => {
        const WithEmail = withEmail(WrappedComponent);

        renderWithStoreAndRouter({
            ui: <WithEmail />,
            path: `/${PATHS.CONFIRM_EMAIL}?email=${email}`,
        });

        expect(screen.queryByTestId(invalidEmailTestId)).toBeNull();
        expect(screen.queryByText(invalidEmailQueryText)).toBeNull();
        expect(screen.queryByText(email)).toBeInTheDocument();
    });

    /*******************************************************************************
     *                                    !ERROR
     *******************************************************************************/
    it('renders error on invalid query', () => {
        const WithEmail = withEmail(WrappedComponent);

        renderWithStoreAndRouter({
            ui: <WithEmail />,
            path: `/${PATHS.CONFIRM_EMAIL}`,
        });

        expect(screen.queryByTestId(invalidEmailTestId)).toBeInTheDocument();
        expect(screen.queryByText(invalidEmailQueryText)).toBeInTheDocument();
        expect(screen.queryByText(email)).toBeNull();
    });
});
