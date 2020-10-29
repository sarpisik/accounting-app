import { useState } from 'react';
import {
    ErrorTypes,
    ResBody,
} from '../../../../../../shared-types/lib/entities/shared';
import { BaseState } from '../../../../../plugins/gatsby-plugin-redux/store/slices/shared';
import { ValidationError } from '../../../../types/errors';

export interface Status extends BaseState<string | ValidationError[]> {
    type?: ErrorTypes;
}

const INITIAL_STATE: Status = {
    status: 'INITIAL',
    content: '',
    type: undefined,
};

export interface FormEventParams<
    ApiParams,
    Success,
    ErType extends ErrorTypes,
    ApiResponse extends ResBody<Success, ErType, string | ValidationError[]>
> {
    api: (
        param: ApiParams
    ) => Promise<ApiResponse['error'] | ApiResponse['success']>;
    successCb: (
        state: ApiParams,
        response: ApiResponse['success']['payload']
    ) => string;
    checkFail: (
        response: ApiResponse['success'] | ApiResponse['error']
    ) => response is ApiResponse['error'];
}

export function useFormEvent<
    ApiParams,
    Success,
    ErType extends ErrorTypes,
    ApiResponse extends ResBody<Success, ErType, string | ValidationError[]>
>(
    params: FormEventParams<ApiParams, Success, ErType, ApiResponse>
): {
    status: Status;
    setInitialStatus(): void;
    onSubmit(state: ApiParams): Promise<void>;
} {
    const { api, checkFail, successCb } = params,
        [status, setStatus] = useState(INITIAL_STATE);

    async function onSubmit(state: ApiParams) {
        try {
            setStatus(setLoading);
            const response = await api(state);

            if (checkFail(response))
                setStatus(setError(response.payload, response.type));
            else setStatus(setSuccess(successCb(state, response.payload)));
        } catch (error) {
            console.error(error);
            setStatus(setError('', ErrorTypes.BAD_REQUEST));
        }
    }

    function setInitialStatus() {
        setStatus(INITIAL_STATE);
    }

    return { onSubmit, setInitialStatus, status };
}

/* --------------------------------- HELPERS -------------------------------- */

function setLoading(state: Status): Status {
    return { ...state, status: 'LOADING' };
}
function setSuccess(content: string): (state: Status) => Status {
    return function onSuccess(state: Status): Status {
        return { ...state, status: 'SUCCESS', content };
    };
}
function setError(
    content: Status['content'],
    type: Status['type']
): (state: Status) => Status {
    return function onError(state: Status): Status {
        return { ...state, status: 'ERROR', content, type };
    };
}
