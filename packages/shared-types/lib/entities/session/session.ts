import { ReqType } from '../../../../server/src/routes/v1/shared';
import { IAccountDocument } from '../account';
import { ErrorTypes, ResBody } from '../shared';
import { IUser, IUserDocument } from '../user';

type SignBody = Pick<IUser, 'name' | 'email' | 'password'>;

interface PostSignInReq extends ReqType {
    body: Omit<SignBody, 'name'>;
}

export interface PostSignIn<ID = string> {
    req: PostSignInReq;
    resBody: ResBody<Omit<IUserDocument<ID>, 'password'>>;
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

export interface GetSessionUser<ID, Decimal> {
    req: ReqType;
    resBody: ResBody<
        Omit<IUserDocument<ID>, 'password' | 'account'> & {
            account: Extract<
                IUserDocument<ID>['account'],
                IAccountDocument<ID, Decimal>
            >;
        },
        ErrorTypes.UNAUTHORIZED
    >;
}
