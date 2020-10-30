import {
    DeleteSignOut,
    PATHS,
    pathWithLeadSlash,
    SessionPath,
} from '../../../../../../shared-types/lib';
import { ApiWithCredentials } from '../../apiWithCredentials';

export type ISignOutResponse = DeleteSignOut['resBody'];
export type SignOutResponse =
    | ISignOutResponse['success']
    | ISignOutResponse['error'];

class _SignOutApi extends ApiWithCredentials {
    constructor() {
        super(new SessionPath().path.concat(pathWithLeadSlash(PATHS.SIGN_OUT)));
    }

    signOut = () =>
        this._deleteRequest<SignOutResponse>().then((res) => res.parsedBody);
}

export const SignOutApi = new _SignOutApi();

export function signOutFailed(
    response: SignOutResponse
): response is ISignOutResponse['error'] {
    return response.status === 'ERROR';
}
