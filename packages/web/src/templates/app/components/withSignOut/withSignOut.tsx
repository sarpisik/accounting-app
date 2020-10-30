import React from 'react';
import { Options, useApiRequest } from '../../hooks';
import { withSignOutTestId } from './contants';
import {
    ISignOutResponse,
    SignOutApi,
    signOutFailed as checkFail,
} from '../../../../lib';
import { Backdrop } from '../Backdrop';
import { Spinner } from '../Spinner';
import { useDispatch } from 'react-redux';
import { getAuthSuccess } from '../../../../../plugins/gatsby-plugin-redux/store';

const OPTIONS: Options<
    ISignOutResponse['success']['payload'],
    ISignOutResponse['error']['type'],
    ISignOutResponse['error']['payload']
> = {
    initialState: {
        status: 'INITIAL',
        content: '',
        type: undefined,
    },
    checkFail,
};

export function withSignOut<
    P extends React.ButtonHTMLAttributes<HTMLButtonElement>
>(WrappedComponent: React.ComponentType<P>) {
    return function WithSignOut(props: Omit<P, 'onClick'>): React.ReactElement {
        const dispatch = useDispatch(),
            { status, apiCall } = useApiRequest(OPTIONS),
            open = status.status === 'LOADING',
            success = status.status === 'SUCCESS',
            onClick = () => {
                apiCall(SignOutApi.signOut());
            };

        React.useEffect(
            function signOutOnSuccess() {
                if (success) dispatch(getAuthSuccess(null));
            },

            // Skip dep "dispatch".
            // eslint-disable-next-line react-hooks/exhaustive-deps
            [success]
        );

        return (
            <React.Fragment>
                <Backdrop open={open}>
                    <Spinner />
                </Backdrop>
                <WrappedComponent
                    data-testid={withSignOutTestId}
                    {...(props as P)}
                    onClick={onClick}
                />
            </React.Fragment>
        );
    };
}
