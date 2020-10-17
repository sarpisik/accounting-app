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

export interface PostUser {
    reqBody: Pick<IUser, 'name' | 'email' | 'password'>;
    resBody: ResBody<Pick<IUser, 'email'>>;
}
export interface GetUser {
    reqParams: { param: string };
    reqQuery: { by: 'id' | 'email' };
    resBody: ResBody<Omit<IUserDocument, 'password'>>;
}
export interface DeleteUser {
    reqParams: { id: string };
    resBody: ResBody<null>;
}
export interface PutUser {
    reqBody: Omit<IUserDocument, 'created_at' | 'updated_at'>;
    reqParams: { param: string };
    reqQuery: { by: 'id' | 'email' };
    resBody: ResBody<Omit<IUserDocument, 'password'>>;
}
