export interface ResBody<S, E = unknown> {
    success: {
        status: 'SUCCESS';
        payload: S;
    };
    error: {
        status: 'ERROR';
        payload?: E;
    };
}
