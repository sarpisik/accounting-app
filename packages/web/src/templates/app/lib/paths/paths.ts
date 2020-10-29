import { Locales } from '../../types';

export function localizedPath(locale: Locales, paths: string[]): string {
    return `/${locale}/`.concat(paths.join('/'));
}
