/* eslint-disable @typescript-eslint/ban-ts-ignore */
/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import { useDispatch } from 'react-redux';
import { getAuthSuccess } from '../../../../../../plugins/gatsby-plugin-redux/store';
import {
    fireEvent,
    renderWithStore,
    screen,
    waitFor,
} from '../../../../../../spec';
import { SignOutApi } from '../../../../../lib';
import { spinnerTestId } from '../../Spinner';
import { withSignOutTestId } from '../contants';
import { withSignOut } from '../withSignOut';

describe(`"HOC: ${withSignOut.name}"`, () => {
    let mockApi: jest.SpyInstance<Promise<unknown>>;

    const now = new Date().toString(),
        user: Parameters<typeof getAuthSuccess>[0] = {
            _id: 'auhd w hf38f',
            authorize: 'MASTER',
            name: 'test user',
            email: 'test@example.com',
            isValidated: true,
            // @ts-ignore
            last_login: now,
            // @ts-ignore
            updated_at: now,
            // @ts-ignore
            created_at: now,
            // @ts-ignore
            account: null,
        },
        MockChildren: React.FC = (props) => {
            const dispatch = useDispatch();

            React.useEffect(() => {
                dispatch(getAuthSuccess(user));
                // eslint-disable-next-line react-hooks/exhaustive-deps
            }, []);

            return <button {...props}>Button</button>;
        },
        WithSignOut = withSignOut(MockChildren);

    beforeEach(() => {
        mockApi = jest.spyOn(SignOutApi, 'signOut');
    });

    afterEach(() => {
        mockApi.mockRestore();
    });

    it('renders wrapped component', () => {
        renderWithStore({ ui: <WithSignOut /> });

        expect(screen.queryByTestId(withSignOutTestId)).toBeInTheDocument();
    });

    it('sign out on click wrapped component', async () => {
        mockApi = mockApi.mockResolvedValueOnce({
            status: 'SUCCESS',
            payload: null,
        });
        const { store } = renderWithStore({ ui: <WithSignOut /> });

        // Wait for user dispatch.
        await waitFor(() => {
            expect(store.getState().auth.user).toEqual(user);
        });

        // Click on sign out btn.
        fireEvent.click(screen.getByTestId(withSignOutTestId));

        // Spinner rendered.
        await waitFor(() => {
            expect(screen.queryByTestId(spinnerTestId)).toBeInTheDocument();
        });

        // Store updated.
        await waitFor(() => {
            expect(store.getState().auth.user).toBeNull();
        });
    });
});
