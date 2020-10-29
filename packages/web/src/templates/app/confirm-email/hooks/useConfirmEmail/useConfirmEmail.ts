import { useState } from 'react';
import {
    ErrorTypes,
    ResBody,
} from '../../../../../../../shared-types/lib/entities/shared';
import { BaseState } from '../../../../../../plugins/gatsby-plugin-redux/store/slices/shared';

export interface Status<Content> extends BaseState<Content> {
    type?: ErrorTypes;
}

type ApiResponse<S, T extends ErrorTypes, E = unknown> =
    | ResBody<S, T, E>['error']
    | ResBody<S, T, E>['success'];

export interface Options<S, T extends ErrorTypes, E = unknown> {
    initialState: Status<ApiResponse<S, T, E>['payload'] | string>;
    checkFail(
        response: ApiResponse<S, T, E>
    ): response is ResBody<S, T, E>['error'];
}

export function useConfirmEmail<S, T extends ErrorTypes, E = unknown>(
    options: Options<S, T, E>
): {
    status: Status<string | S | E>;
    apiCall(request: Promise<ApiResponse<S, T, E>>): Promise<void>;
} {
    const { checkFail, initialState } = options,
        [status, setStatus] = useState(initialState);

    async function apiCall(request: Promise<ApiResponse<S, T, E>>) {
        try {
            setStatus(setLoading);

            const response = await request;

            if (checkFail(response))
                setStatus(setError(response.payload, response.type));
            else setStatus(setSuccess(response.payload));
        } catch (error) {
            console.error(error);
            setStatus(setError('', ErrorTypes.BAD_REQUEST));
        }
    }

    return { status, apiCall };
}

/* ********************************* HELPERS ******************************** */

function setLoading<Content>(state: Status<Content>): Status<Content> {
    return { ...state, status: 'LOADING' };
}
function setSuccess<S, E>(
    content: Status<S>['content']
): (state: Status<S | E>) => Status<S | E> {
    return function onSuccess(state: Status<S | E>): Status<S | E> {
        return { ...state, status: 'SUCCESS', content };
    };
}
function setError<S, E>(
    content: Status<E>['content'],
    type: Status<E>['type']
): (state: Status<S | E>) => Status<S | E> {
    return function onError(state: Status<S | E>): Status<S | E> {
        return { ...state, status: 'ERROR', content, type };
    };
}
