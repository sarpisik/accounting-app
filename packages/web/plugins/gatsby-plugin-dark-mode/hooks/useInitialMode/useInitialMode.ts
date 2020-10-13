import { useEffect } from 'react';
import { EnvironmentType } from '../../constants';
import { getLocalMode } from '../../helpers';
import { useMode } from '../useMode';

export default function useInitialMode(environment: EnvironmentType): void {
    const { mode, setMode } = useMode();

    // Set initial mode
    useEffect(() => {
        setMode(getLocalMode(environment === 'BROWSER'));

        // skip dep dispatch
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [environment]);

    // Register mode updates
    useEffect(() => {
        localStorage.setItem('mode', mode);
    }, [mode]);
}
