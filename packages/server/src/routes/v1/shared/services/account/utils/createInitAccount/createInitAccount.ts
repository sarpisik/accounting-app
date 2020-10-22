import { IAccountDocument } from '../../types';
import { AccountDefaults } from '../createDefaults';

export default function createInitUser(
    defaults: AccountDefaults
): Omit<IAccountDocument, '_id'> {
    return Object.assign(Object.create(null), defaults);
}
