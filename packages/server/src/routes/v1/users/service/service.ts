import { DB } from '@app';
import {
    IUserDocument as IUserDocumentClient,
    PostUser,
} from '@shared-types/entities';
import { FindOneOptions } from 'mongodb';
import { ServiceBase } from '../../types';
import { IUserDocument } from './types';
import { convertAccountId, createDefaults, createInitUser } from './utils';

export type LocalUser = Omit<IUserDocument, 'password'>;

export class UserService extends ServiceBase<IUserDocument> {
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

    /**
     * Finds the user by id.
     *
     * @param {string} id
     * @returns user object without password field.
     * @memberof UserService
     */
    getUserById(id: string) {
        return this._getUser(super.safeFilter('_id', super.convertMongoId(id)));
    }

    /**
     * Finds the user by email.
     *
     * @param {string} email
     * @returns user object without password field.
     * @memberof UserService
     */
    getUserByEmail(email: string) {
        return this._getUser(super.safeFilter('email', email));
    }

    async addUser(promise: Promise<PostUser['req']['body']>) {
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
            super.safeFilter('_id', super.convertMongoId(id)),
            { $set: convertAccountId.call(this, user) }
        );
    }

    updateUserByEmail<U extends Partial<Omit<IUserDocumentClient, '_id'>>>(
        email: string,
        user: U
    ) {
        return this._updateUser(super.safeFilter('email', email), {
            $set: convertAccountId.call(this, user),
        });
    }

    deleteUserById(id: string) {
        return super
            ._deleteOne(super.safeFilter('_id', super.convertMongoId(id)))
            .then(({ ok }) => ok);
    }
}
