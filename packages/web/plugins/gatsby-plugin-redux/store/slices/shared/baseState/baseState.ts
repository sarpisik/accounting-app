export interface BaseState<Content> {
    status: 'INITIAL' | 'LOADING' | 'SUCCESS' | 'ERROR';
    content: Content;
}
