import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import {
    getSessionFailed,
    SessionUser,
    SessionUserApi,
} from '../../../../../src/lib/api/session/sessionUser';
import i18n from '../../../../gatsby-plugin-i18n/i18n';
import { RootState, Thunk } from '../../store';
import { BaseState } from '../shared';

interface Auth extends BaseState<string> {
    user: null | SessionUser;
}

const initialState: Auth = { content: '', status: 'INITIAL', user: null };

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        preGetAuth(state) {
            state.status = 'LOADING';
        },
        getAuthSuccess(state, action: PayloadAction<Auth['user']>) {
            state.status = 'SUCCESS';
            state.content = '';
            state.user = action.payload;
        },
        getAuthFailed(state, action: PayloadAction<Auth['content']>) {
            state.status = 'ERROR';
            state.content = action.payload;
            state.user = null;
        },
    },
});

const { getAuthSuccess, getAuthFailed, preGetAuth } = authSlice.actions;

/* -------------------------------- Selector -------------------------------- */
const authSelector: (state: RootState) => Auth = (state) => state.auth;
const authStatusSelector: (state: RootState) => Auth['status'] = (state) =>
    state.auth.status;

/* ---------------------------------- Hook ---------------------------------- */
export const useAuth: () => ReturnType<typeof authSelector> = () =>
    useSelector(authSelector);
export const useAuthSelector: () => ReturnType<
    typeof authStatusSelector
> = () => useSelector(authStatusSelector);

/* --------------------------------- Thunks --------------------------------- */
export const getAuth: () => Thunk = () => async (dispatch) => {
    try {
        dispatch(preGetAuth());

        const response = await SessionUserApi.getSessionUser();

        dispatch(
            getAuthSuccess(getSessionFailed(response) ? null : response.payload)
        );
    } catch (error) {
        console.error(error);
        dispatch(getAuthFailed(i18n.t('api.session.unExpectedError')));
    }
};

/* --------------------------------- Reducer -------------------------------- */
export const auth = authSlice.reducer;
