import { DB } from '@app';
import { Collection, CollectionInsertOneOptions } from 'mongodb';

export abstract class ServiceBase<Document> {
    protected _collection: Collection<Document>;

    constructor(db: DB, collectionName: string) {
        this._collection = db.collection<Document>(collectionName);
    }

    find(
        query: Parameters<Collection<Document>['find']>[0],
        options?: Parameters<Collection<Document>['find']>[1]
    ) {
        return this._collection.find(query, options).toArray();
    }

    insertOne(
        doc: Parameters<Collection<Document>['insertOne']>[0],
        options?: CollectionInsertOneOptions
    ) {
        return this._collection
            .insertOne(doc, options)
            .then((result) => result.ops[0]);
    }
}
