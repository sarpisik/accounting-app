import {
    PATHS,
    pathWithLeadSlash,
    GetSessionUser,
    SessionPath,
} from '../../../../../../shared-types/lib';
import { Api } from '../../api';

type GetSessionUserResponse = GetSessionUser<string, unknown>['resBody'];
type SessionUserResponse =
    | GetSessionUserResponse['success']
    | GetSessionUserResponse['error'];

export type SessionUser = GetSessionUserResponse['success']['payload'];

export class SessionUserApi extends Api {
    constructor() {
        super(new SessionPath().path.concat(pathWithLeadSlash(PATHS.SESSION)));
    }

    getSessionUser: () => Promise<SessionUserResponse> = () =>
        this._getRequest<SessionUserResponse>().then((res) => res.parsedBody);
}

export function getSessionFailed(
    response: SessionUserResponse
): response is GetSessionUserResponse['error'] {
    return response.status === 'ERROR';
}
