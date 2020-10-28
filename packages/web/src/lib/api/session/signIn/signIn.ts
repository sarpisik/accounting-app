import {
    PATHS,
    pathWithLeadSlash,
    PostSignIn,
    SessionPath,
} from '../../../../../../shared-types/lib';
import { Api } from '../../api';

type ResolvedPostSignIn = PostSignIn<string, unknown>;
export type ISignInResponse = ResolvedPostSignIn['resBody'];
export type SignInResponse =
    | ISignInResponse['success']
    | ISignInResponse['error'];

class _SignInApi extends Api {
    constructor() {
        super(new SessionPath().path.concat(pathWithLeadSlash(PATHS.SIGN_IN)));
    }

    signInUser: (
        body: ResolvedPostSignIn['req']['body']
    ) => Promise<SignInResponse> = (body) =>
        this._postRequest<SignInResponse>({ body }).then(
            (res) => res.parsedBody
        );
}

export const SignInApi = new _SignInApi();

export function signInFailed(
    response: SignInResponse
): response is ISignInResponse['error'] {
    return response.status === 'ERROR';
}
