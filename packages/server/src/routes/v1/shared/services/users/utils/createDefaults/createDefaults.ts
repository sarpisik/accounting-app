import { IUser } from '@shared-types/entities';
import { createDateDefaults } from '../../../shared';

export type UserDefaults = Omit<IUser, 'name' | 'email' | 'password'>;

export function createDefaults(now: Date): UserDefaults {
    const defaults: UserDefaults = Object.create(null);

    defaults.account = null;
    defaults.authorize = 'MASTER';
    defaults.isValidated = now; // TTL index

    return createDateDefaults(defaults, now);
}
