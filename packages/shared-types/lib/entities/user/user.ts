import { ReqType } from 'src/routes/v1/shared';
import { Base, ResBody } from '../shared';

export interface IUserDocument extends IUser {
    _id: string;
}

export interface IUser extends Base {
    name: string;
    email: string;
    password: string;
    authorize: 'READ' | 'READ_WRITE' | 'ADMIN' | 'MASTER';
    account: string | null;
    isValidated: Date | true; // Default Date to TTL.
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
