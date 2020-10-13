import { Modes } from '../../gatsby-plugin-redux/store/slices';

export default function getLocalMode(isBrowser: boolean): Modes {
    const localeMode =
        isBrowser && (window.localStorage.getItem('mode') as Modes | null);

    return localeMode || 'dark';
}
