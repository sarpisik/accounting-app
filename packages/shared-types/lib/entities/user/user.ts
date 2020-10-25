import { ReqType } from '../../../../server/src/routes/v1/shared';
import { IAccountDocument } from '../account';
import { Base, ResBody } from '../shared';

export interface IUserDocument<ID = string, Decimal = unknown>
    extends Omit<IUser, 'account'> {
    _id: ID;
    account: ID | IAccountDocument<ID, Decimal>;
}

export interface IUser extends Base {
    account: null;
    name: string;
    email: string;
    password: string;
    authorize: 'READ' | 'READ_WRITE' | 'ADMIN' | 'MASTER';
    isValidated: Date | true; // Default Date to TTL.
    last_login: Date;
}

interface PostUserReq extends ReqType {
    body: Pick<IUser, 'name' | 'email' | 'password'>;
}
export interface PostUser {
    req: PostUserReq;
    resBody: ResBody<Pick<IUser, 'email'>>;
}

interface GetUserReq extends ReqType {
    params: { param: string };
    query: { by: 'id' | 'email' };
}
export interface GetUser {
    req: GetUserReq;
    resBody: ResBody<Omit<IUserDocument, 'password'>>;
}

interface DeleteUserReq extends ReqType {
    params: { id: string };
}
export interface DeleteUser {
    req: DeleteUserReq;
    resBody: ResBody<null>;
}

interface PutUserReq extends GetUserReq {
    body: Omit<IUserDocument, 'created_at' | 'updated_at'>;
}
export interface PutUser {
    req: PutUserReq;
    resBody: ResBody<Omit<IUserDocument, 'password'>>;
}
