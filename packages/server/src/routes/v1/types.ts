import { DB } from '@app';
import {
    Collection,
    CollectionInsertOneOptions,
    FilterQuery,
    FindOneAndDeleteOption,
    FindOneAndUpdateOption,
    FindOneOptions,
    ObjectId,
} from 'mongodb';

export abstract class ServiceBase<Document> {
    protected _collection: Collection<Document>;

    constructor(db: DB, collectionName: string) {
        this._collection = db.collection<Document>(collectionName);
    }

    protected _find<D extends Document>(
        query: Parameters<Collection<Document>['find']>[0],
        options?: Parameters<Collection<Document>['find']>[1]
    ) {
        return this._collection
            .find<D>(
                query,
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                options
            )
            .toArray();
    }

    protected _findOne<D>(
        query: FilterQuery<Document>,
        options?: FindOneOptions<D extends Document ? Document : D>
    ) {
        return this._collection.findOne(query, options);
    }

    protected _insertOne(
        doc: Parameters<Collection<Document>['insertOne']>[0],
        options?: CollectionInsertOneOptions
    ) {
        return this._collection
            .insertOne(doc, options)
            .then((result) => result.ops[0]);
    }

    protected _updateOne(
        doc: Parameters<Collection<Document>['findOneAndUpdate']>[0],
        update: Parameters<Collection<Document>['findOneAndUpdate']>[1],
        options?: FindOneAndUpdateOption<Document>
    ) {
        return this._collection
            .findOneAndUpdate(doc, update, options)
            .then((result) => result.value);
    }

    protected _deleteOne(
        filter: Parameters<Collection<Document>['findOneAndDelete']>[0],
        options?: FindOneAndDeleteOption<Document>
    ) {
        return this._collection.findOneAndDelete(filter, options);
    }

    convertMongoId(id: string) {
        return new ObjectId(id);
    }

    safeFilter<V>(key: keyof Document, value: V) {
        return { [key]: { $in: [value] } };
    }
}
