import { PageProps as _PageProps } from 'gatsby';

export interface PageProps extends Partial<_PageProps> {
    path?: string;
    default?: boolean;
}
