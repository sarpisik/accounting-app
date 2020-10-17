import { DB } from '@app';
import {
    IUserDocument as IUserDocumentClient,
    PostUser,
} from '@shared-types/entities';
import { FindOneOptions } from 'mongodb';
import { ServiceBase } from '../../types';
import { IUserDocument } from './types';
import { convertAccountId, createDefaults, createInitUser } from './utils';

export default class UserService extends ServiceBase<IUserDocument> {
    constructor(db: DB) {
        super(db, 'users');
    }

    private _getUser<U extends Omit<IUserDocument, 'password'>>(
        query: Parameters<UserService['_findOne']>[0],
        options:
            | FindOneOptions<U extends IUserDocument ? IUserDocument : U>
            | undefined = {}
    ) {
        return super._findOne<U>(
            query,
            Object.assign(options, { projection: { password: 0 } })
        );
    }

    private _updateUser(
        query: Parameters<UserService['_updateOne']>[0],
        update: Parameters<UserService['_updateOne']>[1],
        options: Parameters<UserService['_updateOne']>[2] = {}
    ) {
        return super._updateOne(
            query,
            update,
            Object.assign(options, { projection: { password: 0 } })
        );
    }

    getUsers() {
        return super._find({});
    }

    getUserById(id: string) {
        return this._getUser({ _id: super.convertMongoId(id) });
    }

    getUserByEmail(email: IUserDocument['email']) {
        return this._getUser({ email });
    }

    async addUser(promise: Promise<PostUser['reqBody']>) {
        const body = await promise;

        return super._insertOne(
            createInitUser(body, createDefaults(new Date()))
        );
    }

    updateUserById<U extends Partial<Omit<IUserDocumentClient, '_id'>>>(
        id: string,
        user: U
    ) {
        return this._updateUser(
            { _id: super.convertMongoId(id) },
            { $set: convertAccountId.call(this, user) }
        );
    }

    updateUserByEmail<U extends Partial<Omit<IUserDocumentClient, '_id'>>>(
        email: string,
        user: U
    ) {
        return this._updateUser(
            { email },
            { $set: convertAccountId.call(this, user) }
        );
    }

    deleteUserById(id: string) {
        return super
            ._deleteOne({ _id: { $in: [super.convertMongoId(id)] } })
            .then(({ ok }) => ok);
    }
}
