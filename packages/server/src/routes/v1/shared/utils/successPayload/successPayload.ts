import { ResBody } from '@shared-types/entities/shared';

export default function successPayload<P>(payload: P): ResBody<P>['success'] {
    return { status: 'SUCCESS', payload };
}
