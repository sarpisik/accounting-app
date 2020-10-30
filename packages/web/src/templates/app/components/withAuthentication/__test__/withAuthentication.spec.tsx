import React from 'react';
import { ErrorTypes } from '../../../../../../../shared-types/lib/entities/shared';
import { store } from '../../../../../../plugins/gatsby-plugin-redux/store';
import { renderWithStore, screen, waitFor } from '../../../../../../spec';
import { SessionUserApi } from '../../../../../lib';
import { withAuthentication } from '../withAuthentication';

describe('"HOC: withAuthentication', () => {
    let mockApi: jest.SpyInstance<Promise<unknown>>;

    const dataTestId = 'mock-children',
        MockChildren: React.FC = (props) => (
            <div data-testid={dataTestId}>{props.children}</div>
        ),
        WithAuthentication = withAuthentication(MockChildren),
        props: React.ComponentProps<typeof WithAuthentication> = {
            children: "Wrapped component's children",
            pageContext: { locale: 'en' },
        };

    beforeEach(() => {
        mockApi = jest.spyOn(SessionUserApi, 'getSessionUser');
    });

    afterEach(() => {
        mockApi.mockRestore();
    });

    it('should render passed children when the session un authenticated.', async () => {
        mockApi = mockApi.mockResolvedValueOnce({
            status: 'ERROR',
            type: ErrorTypes.UNAUTHORIZED,
        });

        renderWithStore({ ui: <WithAuthentication {...props} /> });

        await waitFor(() => {
            expect(store.getState().auth).toEqual({
                status: 'SUCCESS',
                user: null,
                content: '',
            });
            expect(screen.getByTestId(dataTestId)).toBeInTheDocument();
        });
    });

    it('should render passed children when the session authenticated.', async () => {
        mockApi = mockApi.mockResolvedValueOnce({
            status: 'SUCCESS',
            payload: { name: 'test user' },
        });

        renderWithStore({ ui: <WithAuthentication {...props} /> });

        await waitFor(() => {
            expect(store.getState().auth).toEqual({
                status: 'SUCCESS',
                user: { name: 'test user' },
                content: '',
            });
            expect(screen.getByTestId(dataTestId)).toBeInTheDocument();
            expect(screen.getByTestId(dataTestId)).toHaveTextContent(
                props.children as string
            );
        });
    });
});
