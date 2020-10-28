import {
    PATHS,
    pathWithLeadSlash,
    PostSignUp,
    SessionPath,
} from '../../../../../../shared-types/lib';
import { Api } from '../../api';

export type ISignUpResponse = PostSignUp['resBody'];
export type SignUpResponse =
    | ISignUpResponse['success']
    | ISignUpResponse['error'];

class _SignUpApi extends Api {
    constructor() {
        super(new SessionPath().path.concat(pathWithLeadSlash(PATHS.SIGN_UP)));
    }

    signUpUser: (body: PostSignUp['req']['body']) => Promise<SignUpResponse> = (
        body
    ) =>
        this._postRequest<SignUpResponse>({ body }).then(
            (res) => res.parsedBody
        );
}

export const SignUpApi = new _SignUpApi();

export function signUpFailed(
    response: SignUpResponse
): response is PostSignUp['resBody']['error'] {
    return response.status === 'ERROR';
}
