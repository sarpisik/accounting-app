import {
    Backdrop,
    CircularProgress,
    createStyles,
    makeStyles,
} from '@material-ui/core';
import React from 'react';
import { Status } from '../../hooks';
import { useFeedback } from './hooks';

interface Props extends Status {
    onFeedbackClick: () => void;
}

const useStyles = makeStyles((theme) =>
    createStyles({
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: '#fff',
        },
    })
);

export function Feedback(props: Props): React.ReactElement {
    const { onFeedbackClick, status, type } = props,
        classes = useStyles(),
        [open, setOpen] = React.useState(false),
        handleClose = () => {
            onFeedbackClick();
        },
        localizedFeedback = useFeedback(type),
        isLoading = status === 'LOADING',
        shouldFeedbackError = status === 'ERROR' && localizedFeedback,
        shouldOpen = Boolean(isLoading || shouldFeedbackError);

    React.useEffect(() => {
        setOpen(shouldOpen);
    }, [shouldOpen]);

    return (
        <Backdrop
            data-testid="backdrop"
            className={classes.backdrop}
            open={open}
            onClick={handleClose}
        >
            {contentReducer(isLoading, localizedFeedback)}
        </Backdrop>
    );
}

function contentReducer<F>(isLoading: boolean, feedback: F) {
    return isLoading ? (
        <CircularProgress data-testid="spinner" color="inherit" />
    ) : (
        feedback
    );
}
