import { Decimal128 } from 'mongodb';
import { createDateDefaults } from '../../../shared';
import { IAccountDocument } from '../../types';

export type AccountDefaults = Omit<IAccountDocument, '_id'>;

export function createDefaults(): AccountDefaults {
    const defaults: AccountDefaults = Object.create(null);

    defaults.tax_no = '';
    defaults.company_name = '';
    defaults.balance = Decimal128.fromString('0.00');

    return createDateDefaults(defaults);
}
