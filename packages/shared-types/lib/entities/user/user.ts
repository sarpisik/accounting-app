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
