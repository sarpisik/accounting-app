import { DB } from '@app';
import { ServiceBase } from 'src/routes/v1/types';
import { IAccountDocument } from './types';
import { createDefaults } from './utils';
import { createInitAccount } from './utils/createInitAccount';

export class AccountService extends ServiceBase<IAccountDocument> {
    constructor(db: DB) {
        super(db, 'accounts');
    }

    /**
     * Creates account document.
     *
     * @returns account document with _id.
     * @memberof AccountService
     */
    createAccount() {
        return super._insertOne(createInitAccount(createDefaults()));
    }

    /**
     * Deletes account document by _id.
     *
     * @param {IAccountDocument['_id']} id
     * @returns http://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#~findAndModifyWriteOpResult
     * @memberof AccountService
     */
    deleteAccount(id: IAccountDocument['_id']) {
        return super._deleteOne(super.safeFilter('_id', id));
    }
}
