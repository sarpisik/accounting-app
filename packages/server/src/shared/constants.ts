export const paramMissingError =
    'One or more of the required parameters was missing.';
export function docNotFound<D, Q>(doc: string, query: Q, data: D) {
    return `${doc} not found by ${query}: ${data}`;
}
export function mutateFailed<D, Q>(doc: string, query: Q, data: D) {
    return `${doc} mutate failed by ${query}: ${data}`;
}
export function deleteFailed<D, Q>(doc: string, query: Q, data: D) {
    return `${doc} delete failed by ${query}: ${data}`;
}
