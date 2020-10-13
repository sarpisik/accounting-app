import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { RootState, Thunk } from '../../store';

export const MODE_MAP = { light: 'dark', dark: 'light' } as const;

export type Modes = keyof typeof MODE_MAP;

interface Mode {
    mode: Modes;
}

const initialState: Mode = { mode: 'light' };

export const modeSlice = createSlice({
    name: 'mode',
    initialState,
    reducers: {
        setMode(state, action: PayloadAction<Modes>) {
            state.mode = action.payload;
        },
    },
});

const { setMode: _setMode } = modeSlice.actions;

// Selector
const modeSelector: (state: RootState) => Modes = (state) => state.mode.mode;

// Hook
export const useMode: () => ReturnType<typeof modeSelector> = () =>
    useSelector(modeSelector);

// Thunks
export const toggleMode: () => Thunk = () => (dispatch, getState) => {
    dispatch(_setMode(MODE_MAP[modeSelector(getState())]));
};

export const setMode: (mode: Modes) => Thunk = (mode) => (dispatch) => {
    dispatch(_setMode(mode));
};

// Reducer
export const mode = modeSlice.reducer;
