import { IUser } from '@shared-types/entities';
import { ObjectId } from 'mongodb';

// Converting ID type string to Mongo ID

export interface IUserServer extends Omit<IUser, '_id' | 'account'> {
    account: ObjectId | null;
}

export interface IUserDocument extends IUserServer {
    _id: ObjectId;
}
