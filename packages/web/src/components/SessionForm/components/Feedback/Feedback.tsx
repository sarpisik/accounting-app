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
    onFeedbackClick(): void;
    apiErrorConverter(param: Status['type']): string;
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
    const { onFeedbackClick, apiErrorConverter, status, type, content } = props,
        classes = useStyles(),
        [open, setOpen] = React.useState(false),
        handleClose = () => {
            onFeedbackClick();
        },
        localizedFeedback = useFeedback(apiErrorConverter, type, content),
        isLoading = status === 'LOADING',
        isError = status === 'ERROR',
        isSuccess = status === 'SUCCESS',
        shouldFeedbackError = (isError || isSuccess) && localizedFeedback,
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
