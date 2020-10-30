import React from 'react';
import { Backdrop } from '../../../Backdrop';
import { Spinner } from '../../../Spinner';
import { Status } from '../../hooks';
import { useFeedback } from './hooks';

interface Props extends Status {
    onFeedbackClick(): void;
    apiErrorConverter(param: Status['type']): string;
}

export function Feedback(props: Props): React.ReactElement {
    const { onFeedbackClick, apiErrorConverter, status, type, content } = props,
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
        <Backdrop open={open} onClick={handleClose}>
            {contentReducer(isLoading, localizedFeedback)}
        </Backdrop>
    );
}

function contentReducer<F>(isLoading: boolean, feedback: F) {
    return isLoading ? <Spinner /> : feedback;
}
