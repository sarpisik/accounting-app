import { DB } from '@app';
import { IUser as _IUser, PostUser } from '@shared-types/entities';
import { ObjectId } from 'mongodb';
import { ServiceBase } from '../../types';

interface IUser extends Omit<_IUser, '_id' | 'account'> {
    account: ObjectId | null;
}

interface IUserDocument extends IUser {
    _id: ObjectId;
}

export default class UserService extends ServiceBase<IUserDocument> {
    constructor(db: DB) {
        super(db, 'users');
    }

    getUsers() {
        return super.find({});
    }

    addUser(promise: Promise<PostUser['reqBody']>) {
        return promise.then((doc) => {
            const now = new Date();
            const defaults: Omit<IUser, 'name' | 'email' | 'password'> = {
                created_at: now,
                updated_at: now,
                account: null,
                isValidated: now,
                authorize: 'MASTER',
            };
            const document: IUser = Object.assign(
                Object.create(null),
                doc,
                defaults
            );

            return super.insertOne(document);
        });
    }
}
