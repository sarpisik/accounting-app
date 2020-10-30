import {
    GetSessionUser,
    PATHS,
    pathWithLeadSlash,
    SessionPath,
} from '../../../../../../shared-types/lib';
import { ApiWithCredentials } from '../../apiWithCredentials';

type GetSessionUserResponse = GetSessionUser<string, unknown>['resBody'];
type SessionUserResponse =
    | GetSessionUserResponse['success']
    | GetSessionUserResponse['error'];

export type SessionUser = GetSessionUserResponse['success']['payload'];

class _SessionUserApi extends ApiWithCredentials {
    constructor() {
        super(new SessionPath().path.concat(pathWithLeadSlash(PATHS.SESSION)));
    }

    getSessionUser: () => Promise<SessionUserResponse> = () =>
        this._getRequest<SessionUserResponse>().then((res) => res.parsedBody);
}

export const SessionUserApi = new _SessionUserApi();

export function getSessionFailed(
    response: SessionUserResponse
): response is GetSessionUserResponse['error'] {
    return response.status === 'ERROR';
}
