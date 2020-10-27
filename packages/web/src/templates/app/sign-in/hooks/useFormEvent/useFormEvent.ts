import { useState } from 'react';
import { ErrorTypes } from '../../../../../../../shared-types/lib/entities/shared';
import { BaseState } from '../../../../../../plugins/gatsby-plugin-redux/store/slices/shared';
import { SignInApi, signInFailed } from '../../../../../lib/api/session/signIn';
import { initialValues } from '../../schema';

interface Status extends BaseState<unknown> {
    type?: ErrorTypes;
}

export function useFormEvent(): {
    status: Status;
    onSubmit: (state: typeof initialValues) => Promise<void>;
} {
    const [status, setStatus] = useState<Status>({
        status: 'INITIAL',
        content: '',
    });

    async function onSubmit(state: typeof initialValues) {
        try {
            setStatus(setLoading);
            const response = await SignInApi.signInUser(state);

            if (signInFailed(response))
                setStatus(setError(response.payload, response.type));
            else setStatus({ status: 'SUCCESS', content: '' });
        } catch (error) {
            setStatus(setError('', ErrorTypes.BAD_REQUEST));
        }
    }

    return { status, onSubmit };
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
