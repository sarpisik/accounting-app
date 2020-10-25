import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
    getAuth,
    useAuthSelector,
} from '../../../../../plugins/gatsby-plugin-redux/store';

export function useAuthentication(): ReturnType<typeof useAuthSelector> {
    const status = useAuthSelector(),
        dispatch = useDispatch();

    useEffect(function getAuthOnMounted() {
        dispatch(getAuth());

        // Skip deps "dispatch".
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return status;
}
