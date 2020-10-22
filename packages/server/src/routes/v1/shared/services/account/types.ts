import { IAccountDocument as _IAccountDocument } from '@shared-types/entities';
import { Decimal128, ObjectId } from 'mongodb';

export type IAccountDocument = _IAccountDocument<ObjectId, Decimal128>;
