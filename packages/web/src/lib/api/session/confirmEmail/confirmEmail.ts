import {
    PATHS,
    pathWithLeadSlash,
    PostConfirmEmail,
    SessionPath,
} from '../../../../../../shared-types/lib';
import { Api } from '../../api';

export type IConfirmEmailResponse = PostConfirmEmail['resBody'];
export type ConfirmEmailResponse =
    | IConfirmEmailResponse['success']
    | IConfirmEmailResponse['error'];

class _ConfirmEmailApi extends Api {
    constructor() {
        super(
            new SessionPath().path.concat(
                pathWithLeadSlash(PATHS.CONFIRM_EMAIL)
            )
        );
    }

    confirmEmail = (body: PostConfirmEmail['req']['body']) =>
        this._postRequest<ConfirmEmailResponse>({ body }).then(
            (res) => res.parsedBody
        );
}

export const ConfirmEmailApi = new _ConfirmEmailApi();

export function confirmEmailFailed(
    response: ConfirmEmailResponse
): response is IConfirmEmailResponse['error'] {
    return response.status === 'ERROR';
}
