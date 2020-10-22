import { Base } from '../shared';

export interface IAccountDocument<ID, Decimal> extends Base {
    _id: ID;
    tax_no: string;
    company_name: string;
    balance: Decimal;
}
