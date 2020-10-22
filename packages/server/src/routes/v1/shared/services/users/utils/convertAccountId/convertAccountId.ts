import { IUserDocument as IUserDocumentClient } from '@shared-types/entities';
import { UserService } from '../../users';
import { IUserDocument } from '../../types';

export default function convertAccountId(
    this: UserService,
    user: Partial<Omit<IUserDocumentClient, '_id'>>
): Partial<IUserDocument> {
    if (
        Object.prototype.hasOwnProperty.call(user, 'account') &&
        Boolean(user.account)
    )
        return Object.assign(user, {
            account: this.convertMongoId(user.account as string),
        });

    return user as Partial<IUserDocument>;
}
