import React from 'react';
import { CircularProgress } from '@material-ui/core';

export const spinnerTestId = 'spinner';

export function Spinner(
    props: Omit<
        React.ComponentProps<typeof CircularProgress>,
        'data-testid' | 'color'
    >
): React.ReactElement {
    return (
        <CircularProgress
            data-testid={spinnerTestId}
            color="inherit"
            {...props}
        />
    );
}
