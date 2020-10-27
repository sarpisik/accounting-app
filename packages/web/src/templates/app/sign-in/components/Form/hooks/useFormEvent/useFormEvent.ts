import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ErrorTypes } from '../../../../../../../../../shared-types/lib/entities/shared';
import { getAuthSuccess } from '../../../../../../../../plugins/gatsby-plugin-redux/store';
import { BaseState } from '../../../../../../../../plugins/gatsby-plugin-redux/store/slices/shared';
import {
    SignInApi,
    signInFailed,
} from '../../../../../../../lib/api/session/signIn';
import { initialValues } from '../../schema';

interface ValidationError {
    msg: string;
    param: string;
    location: string;
}

export interface Status extends BaseState<string | ValidationError[]> {
    type?: ErrorTypes;
}

const INITIAL_STATE: Status = {
    status: 'INITIAL',
    content: '',
    type: undefined,
};

export function useFormEvent(): {
    status: Status;
    setInitialStatus(): void;
    onSubmit(state: typeof initialValues): Promise<void>;
} {
    const [status, setStatus] = useState(INITIAL_STATE),
        dispatch = useDispatch();

    async function onSubmit(state: typeof initialValues) {
        try {
            setStatus(setLoading);
            const response = await SignInApi.signInUser(state);

            if (signInFailed(response))
                setStatus(setError(response.payload, response.type));
            else dispatch(getAuthSuccess(response.payload));
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
function setError(
    content: Status['content'],
    type: Status['type']
): (state: Status) => Status {
    return function onError(state: Status): Status {
        return { ...state, status: 'ERROR', content, type };
    };
}
