import { PageProps as _PageProps } from 'gatsby';
import { ReactNode } from 'react';

export interface PageProps extends Partial<Omit<_PageProps, 'children'>> {
    path?: string;
    default?: boolean;
    children?: ReactNode;
}
