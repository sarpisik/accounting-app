export const paramMissingError =
    'One or more of the required parameters was missing.';
export const enum STATUS {
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR',
}
export function invalidPass(email: string) {
    return `User ${email} password is invalid.`;
}
export function docExist<D>(doc: string, data: D) {
    return `${doc} "${data}" taken already.`;
}
export function emailNotConfirmed(email: string) {
    return `Email "${email}" not confirmed.`;
}
export function docNotFound<D, Q>(doc: string, query: Q, data: D) {
    return `${doc} not found by ${query}: ${data}`;
}
export function createFailed<D, Q>(doc: string, query: Q, data: D) {
    return `${doc} create failed by ${query}: ${data}`;
}
export function mutateFailed<D, Q>(doc: string, query: Q, data: D) {
    return `${doc} mutate failed by ${query}: ${data}`;
}
export function deleteFailed<D, Q>(doc: string, query: Q, data: D) {
    return `${doc} delete failed by ${query}: ${data}`;
}
