import { PostUser } from '@shared-types/entities';
import { IUserServer } from '../../types';
import { UserDefaults } from '../createDefaults';

export default function createInitUser(
    body: PostUser['req']['body'],
    defaults: UserDefaults
): IUserServer {
    return Object.assign(Object.create(null), body, defaults);
}
