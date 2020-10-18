/* eslint-disable @typescript-eslint/ban-ts-comment */
import { UnAuthorizedError } from '@shared/errors';
import { auth, authenticated } from '../auth';

describe('AUTH', () => {
    const userId = '1234567',
        user = { _id: userId },
        service = { getUserById: jasmine.createSpy('getUserById') };

    let req: { session?: { userId: string } },
        res: { locals: { account: typeof user | null } };

    describe('middleware "auth"', () => {
        beforeEach(() => {
            req = { session: { userId } };
            res = { locals: { account: null } };
        });

        it('should set session user to locals', (done) => {
            service.getUserById.and.resolveTo(user);
            const next = () => {
                expect(res.locals.account).toEqual(user);
                done();
            };

            // Ignore missing types of arguments.
            // @ts-ignore
            auth(service)(req, res, next);
        });

        it('should not set session user to locals when session is undefined', (done) => {
            delete req.session;
            // @ts-ignore
            delete res.locals.account;
            const next = () => {
                expect(res.locals.account).toBeUndefined();
                done();
            };

            // Ignore missing types of arguments.
            // @ts-ignore
            auth(service)(req, res, next);
        });

        it('should not set session user to locals when session is defined but user not found', (done) => {
            service.getUserById.and.resolveTo(null);
            // @ts-ignore
            delete res.locals.account;
            const next = () => {
                expect(res.locals.account).toBeNull();
                done();
            };

            // Ignore missing types of arguments.
            // @ts-ignore
            auth(service)(req, res, next);
        });
    });

    describe('middleware "authenticated"', () => {
        beforeEach(() => {
            req = { session: { userId } };
            res = { locals: { account: user } };
        });

        it(`should throw "${UnAuthorizedError.constructor.name}" on local account undefined/null.`, (done) => {
            // @ts-ignore
            delete res.locals.account;
            const next = (error: any) => {
                expect(error).toBeInstanceOf(UnAuthorizedError);
                done();
            };

            // @ts-ignore
            authenticated()(req, res, next);
        });

        it('should call "next" function without error on local account defined', (done) => {
            const next = (error: any) => {
                expect(error).toBeUndefined();
                done();
            };

            // @ts-ignore
            authenticated()(req, res, next);
        });
    });
});
