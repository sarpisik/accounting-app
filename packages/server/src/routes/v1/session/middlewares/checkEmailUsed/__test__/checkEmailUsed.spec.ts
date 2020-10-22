/* eslint-disable @typescript-eslint/ban-ts-comment */
import { EmailTakenError } from '@shared/errors';
import { checkEmailUsed } from '../checkEmailUsed';

describe('MIDDLEWARE "checkEmailUsed"', () => {
    const email = 'test@example.com',
        req = { body: { email } },
        res = {},
        service = { getUserByEmail: jasmine.createSpy('getUserByEmail') };

    it(`should throw "${EmailTakenError.constructor.name}" on email taken.`, (done) => {
        service.getUserByEmail.and.resolveTo({ _id: '123456', email });

        const next = (err: EmailTakenError) => {
            expect(err).toBeInstanceOf(EmailTakenError);
            done();
        };

        // @ts-ignore
        checkEmailUsed(service)(req, res, next);
    });

    it('should call next middleware on email not taken', (done) => {
        service.getUserByEmail.and.resolveTo(null);

        const next = (err: EmailTakenError) => {
            expect(err).toBeUndefined();
            done();
        };

        // @ts-ignore
        checkEmailUsed(service)(req, res, next);
    });
});
