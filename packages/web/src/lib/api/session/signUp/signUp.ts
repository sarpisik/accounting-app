import {
    PATHS,
    pathWithLeadSlash,
    PostSignUp,
    SessionPath,
} from '../../../../../../shared-types/lib';
import { Api } from '../../api';

type SignUpResponse =
    | PostSignUp['resBody']['success']
    | PostSignUp['resBody']['error'];

export class SignUpApi extends Api {
    constructor() {
        super(new SessionPath().path.concat(pathWithLeadSlash(PATHS.SIGN_UP)));
    }

    signUpUser: (body: PostSignUp['req']['body']) => Promise<SignUpResponse> = (
        body
    ) =>
        super
            ._postRequest<SignUpResponse>({ body })
            .then((res) => res.parsedBody);
}

export function signUpFailed(
    response: SignUpResponse
): response is PostSignUp['resBody']['error'] {
    return response.status === 'ERROR';
}
