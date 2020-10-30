import React from 'react';
import {
    Backdrop as MuiBackdrop,
    createStyles,
    makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) =>
    createStyles({
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: '#fff',
        },
    })
);

export const backdropTestId = 'backdrop';

export function Backdrop(
    props: Omit<
        React.ComponentProps<typeof MuiBackdrop>,
        'data-testid' | 'className'
    >
): React.ReactElement {
    const classes = useStyles();

    return (
        <MuiBackdrop
            data-testid={backdropTestId}
            className={classes.backdrop}
            {...props}
        />
    );
}
