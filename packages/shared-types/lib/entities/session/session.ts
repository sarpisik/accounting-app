import { IUserDocument } from '../../../../server/src/routes/v1/shared/services/users/types';
import { ReqType } from '../../../../server/src/routes/v1/shared';
import { ResBody } from '../shared';
import { IUser } from '../user';

type SignBody = Pick<IUser, 'name' | 'email' | 'password'>;

interface PostSignInReq extends ReqType {
    body: Omit<SignBody, 'name'>;
}

export interface PostSignIn {
    req: PostSignInReq;
    resBody: ResBody<Omit<IUserDocument, 'password'>>;
}

interface PostSignUpReq extends ReqType {
    body: SignBody & { passwordConfirm: string; locale: string };
}

export interface PostSignUp {
    req: PostSignUpReq;
    resBody: ResBody<null>;
}

interface PostConfirmEmailReq extends ReqType {
    body: Pick<IUser, 'email'>;
}

export interface PostConfirmEmail {
    req: PostConfirmEmailReq;
    resBody: ResBody<Pick<IUser, 'email' | 'isValidated'>>;
}

export interface DeleteSignOut {
    req: ReqType;
    resBody: ResBody<null>;
}
