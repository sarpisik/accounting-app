import React from 'react';
import { ErrorTypes } from '../../../../../shared-types/lib/entities/shared';
import { store } from '../../../../plugins/gatsby-plugin-redux/store';
import { renderWithStoreAndRouter, screen, waitFor } from '../../../../spec';
import { SessionUserApi } from '../../../lib';
import { localizedPath, PATHS } from '../../../templates/app/lib';
import { withAuthentication } from '../../withAuthentication';
import { withUser } from '../withUser';

describe(`"HOC: ${withUser.name}"`, () => {
    let mockApi: jest.SpyInstance<Promise<unknown>>;

    const dataTestId = 'mock-children',
        MockChildren: React.FC = (props) => (
            <div data-testid={dataTestId}>{props.children}</div>
        ),
        WithUser = withAuthentication(withUser(MockChildren)),
        props: React.ComponentProps<typeof WithUser> = {
            children: "Wrapped component's children",
            pageContext: { locale: 'en' },
        };

    beforeEach(() => {
        mockApi = jest.spyOn(SessionUserApi, 'getSessionUser');
    });

    afterEach(() => {
        mockApi.mockRestore();
    });

    it('should render wrapped component when unauthorized', async () => {
        mockApi = mockApi.mockResolvedValueOnce({
            status: 'ERROR',
            type: ErrorTypes.UNAUTHORIZED,
        });

        renderWithStoreAndRouter({
            ui: <WithUser {...props} />,
        });

        await waitFor(() => {
            expect(store.getState().auth).toEqual({
                status: 'SUCCESS',
                user: null,
                content: '',
            });

            expect(screen.getByTestId(dataTestId)).toBeInTheDocument();
            expect(screen.getByTestId(dataTestId)).toHaveTextContent(
                props.children as string
            );
        });
    });

    it('should navigate when authorized', async () => {
        const user = { name: 'test user' };

        mockApi = mockApi.mockResolvedValueOnce({
            status: 'SUCCESS',
            payload: user,
        });

        const { history } = renderWithStoreAndRouter({
            ui: <WithUser {...props} />,
        });

        await waitFor(() => {
            expect(store.getState().auth).toEqual({
                status: 'SUCCESS',
                user,
                content: '',
            });

            expect(history.location.pathname).toBe(
                localizedPath('en', [PATHS.APP])
            );
        });
    });
});
