import React from 'react';
import { PATHS } from '../../../../../shared-types/lib';
import { ErrorTypes } from '../../../../../shared-types/lib/entities/shared';
import translate from '../../../../plugins/gatsby-plugin-i18n/locales/en/translate.json';
import { store } from '../../../../plugins/gatsby-plugin-redux/store';
import { renderWithStoreAndRouter, screen, waitFor } from '../../../../spec';
import { SessionUserApi } from '../../../lib/api/session/sessionUser';
import { localizedPath } from '../../../templates/app/lib';
import { withAuthentication } from '../../withAuthentication';
import { UnExpectedError } from '../components';
import { withAuthorization } from '../withAuthorization';

describe('"HOC: withAuthorization', () => {
    let mockApi: jest.SpyInstance<Promise<unknown>>;

    const dataTestId = 'mock-children',
        MockChildren: React.FC = (props) => (
            <div data-testid={dataTestId}>{props.children}</div>
        ),
        WithAuthorization = withAuthentication(withAuthorization(MockChildren)),
        props: React.ComponentProps<typeof WithAuthorization> = {
            children: "Wrapped component's children",
            pageContext: { locale: 'en' },
        };

    beforeEach(() => {
        mockApi = jest.spyOn(SessionUserApi, 'getSessionUser');
    });

    afterEach(() => {
        mockApi.mockRestore();
    });

    it('should not render passed children when the session un authorized.', async () => {
        mockApi = mockApi.mockResolvedValueOnce({
            status: 'ERROR',
            type: ErrorTypes.UNAUTHORIZED,
        });

        const { history } = renderWithStoreAndRouter({
            ui: <WithAuthorization {...props} />,
        });

        await waitFor(() => {
            expect(store.getState().auth).toEqual({
                status: 'SUCCESS',
                user: null,
                content: '',
            });

            expect(history.location.pathname).toBe(
                localizedPath('en', [PATHS.APP, PATHS.SIGN_IN])
            );
        });
    });

    it('should render passed children when the session authorized.', async () => {
        const user = { name: 'test user' },
            path = '/covered-path';

        mockApi = mockApi.mockResolvedValueOnce({
            status: 'SUCCESS',
            payload: user,
        });

        renderWithStoreAndRouter({
            ui: <WithAuthorization {...props} />,
            path,
        });

        await waitFor(() => {
            expect(store.getState().auth).toEqual({
                status: 'SUCCESS',
                user,
                content: '',
            });

            expect(screen.getByTestId(dataTestId)).toBeInTheDocument();
            expect(screen.getByTestId(dataTestId)).toHaveTextContent(
                props.children as string
            );
        });
    });

    it(`should render "${UnExpectedError.name}" when the session api throws error.`, async () => {
        const status = 'ERROR';

        mockApi = mockApi.mockRejectedValueOnce('Session api throws error.');

        renderWithStoreAndRouter({ ui: <WithAuthorization {...props} /> });

        await waitFor(() => {
            expect(store.getState().auth).toEqual({
                status,
                user: null,
                content: translate.translations.api.session.unExpectedError,
            });

            expect(screen.getByTestId('un-expected-error')).toBeInTheDocument();
        });
    });
});
