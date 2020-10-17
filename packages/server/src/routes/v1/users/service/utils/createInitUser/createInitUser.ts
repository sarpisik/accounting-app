import { PostUser } from '@shared-types/entities';
import { IUserServer } from '../../types';
import { UserDefaults } from '../createDefaults/createDefaults';

export default function createInitUser(
    body: PostUser['reqBody'],
    defaults: UserDefaults
): IUserServer {
    return Object.assign(Object.create(null), body, defaults);
}
