import { IUser } from '@shared-types/entities';

export type UserDefaults = Omit<IUser, 'name' | 'email' | 'password'>;

export default function createDefaults(now: Date): UserDefaults {
    const defaults: UserDefaults = Object.create(null);

    defaults.account = null;
    defaults.authorize = 'MASTER';
    defaults.created_at = now;
    defaults.isValidated = now; // TTL index
    defaults.updated_at = now;

    return defaults;
}
