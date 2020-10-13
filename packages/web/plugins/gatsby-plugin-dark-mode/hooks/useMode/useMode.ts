import { useDispatch } from 'react-redux';
import {
    setMode as _setMode,
    toggleMode as _toggleMode,
    useMode as _useMode,
} from '../../../gatsby-plugin-redux/store/slices';

export default function useMode(): {
    readonly mode: ReturnType<typeof _useMode>;
    readonly toggleMode: () => void;
    readonly setMode: (mode: Parameters<typeof _setMode>[0]) => void;
} {
    const dispatch = useDispatch();

    const mode = _useMode();
    const setMode = (mode: Parameters<typeof _setMode>[0]) => {
        dispatch(_setMode(mode));
    };
    const toggleMode = () => {
        dispatch(_toggleMode());
    };

    return { mode, toggleMode, setMode } as const;
}
