import { IUser } from '@shared-types/entities';
import { ObjectId } from 'mongodb';
import { IAccountDocument } from '../account/types';

// Converting ID type string to Mongo ID

export interface IUserServer extends Omit<IUser, '_id' | 'account'> {
    account: ObjectId | null | IAccountDocument;
}

export interface IUserDocument<ID = ObjectId> extends IUserServer {
    _id: ID;
}

export interface IUserWithAccount extends IUserDocument {
    account: IAccountDocument;
}
