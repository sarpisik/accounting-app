/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
    PostConfirmEmail,
    PostSignIn,
    PostSignUp,
} from '@shared-types/entities';
import {
    EmailValidationErrors,
    ErrorTypes,
    PasswordValidationErrors,
} from '@shared-types/entities/shared';
import { SessionPath } from '@shared-types/routes';
import {
    createFailed,
    docExist,
    docNotFound,
    emailNotConfirmed,
    invalidPass,
    STATUS,
} from '@shared/constants';
import { pErr } from '@shared/functions';
import { createApp, Request, _App } from '@spec/helpers';
import { StatusCodes } from 'http-status-codes';
import { AccountService, UserService } from 'src/routes/v1/shared';
import supertest from 'supertest';

describe('SESSION ROUTER', () => {
    let Server: _App, api: Request;

    // constants
    const basePath = new SessionPath().path,
        signUp = `${basePath}/sign-up`,
        confirmEmail = `${basePath}/confirm-email`,
        signIn = `${basePath}/sign-in`,
        signOut = `${basePath}/sign-out`,
        { BAD_REQUEST, CREATED, OK } = StatusCodes,
        email = 'test@example.com',
        // helpers
        createUserMock = () => ({
            email,
            name: 'Test User',
            password: '123456',
        }),
        // Api requests
        callApiPost = (
            path: string,
            body: Record<string, unknown>,
            cb: (arg0: supertest.Response) => void
        ) =>
            api.post(path, body).end((err, res) => {
                pErr(err);
                cb(res);
            }),
        callApiDelete = (
            path: string,
            cb: (arg0: supertest.Response) => void
        ) =>
            api.delete(path).end((err, res) => {
                pErr(err);
                cb(res);
            }),
        deleteSignOut = (cb: Parameters<typeof callApiDelete>[1]) =>
            callApiDelete(signOut, cb),
        postSignUp = (
            body: PostSignUp['req']['body'],
            cb: Parameters<typeof callApiPost>[2]
        ) => callApiPost(signUp, body, cb),
        signUpUser = (cb: Parameters<typeof postSignUp>[1]) => {
            const user = createUserMock(),
                passwordConfirm = user.password,
                locale = 'en',
                body = Object.assign({}, user, { passwordConfirm, locale });

            postSignUp(body, cb);
        },
        postConfirmEmail = (
            body: PostConfirmEmail['req']['body'],
            cb: Parameters<typeof callApiPost>[2]
        ) => callApiPost(confirmEmail, body, cb),
        signInUser = (
            body: PostSignIn['req']['body'],
            cb: Parameters<typeof callApiPost>[2]
        ) => callApiPost(signIn, body, cb),
        postSignIn = (
            body: PostSignIn['req']['body'],
            cb: Parameters<typeof callApiPost>[2]
        ) =>
            signUpUser((res) => {
                expect(res.status).toBe(CREATED);
                expect(res.body.status).toBe(STATUS.SUCCESS);
                expect(res.body.payload).toBeNull();

                const signedUpUser = createUserMock();
                const { email } = signedUpUser;
                postConfirmEmail({ email }, (res) => {
                    expect(res.status).toBe(OK);
                    expect(res.body.status).toBe(STATUS.SUCCESS);
                    expect(res.body.payload).toEqual({
                        email,
                        isValidated: true,
                    });

                    signInUser(body, cb);
                });
            });

    beforeAll(async () => {
        const App = await createApp();
        Server = new App();
        const app = await Server.init();
        api = new Request(supertest.agent(app));
    });

    afterAll(async () => {
        await Server.stop();
    });

    afterEach(async () => {
        await Server.resetDB();
    });

    describe(`"POST:${confirmEmail}"`, () => {
        afterEach(async () => {
            await Server.resetDB();
        });

        it(`should response a JSON object within error payload and a status code of "${BAD_REQUEST}" if account create failed.`, (done) => {
            spyOn(AccountService.prototype, 'createAccount').and.resolveTo(
                undefined
            );

            signUpUser((res) => {
                expect(res.status).toBe(CREATED);
                expect(res.body.status).toBe(STATUS.SUCCESS);
                expect(res.body.payload).toBeNull();

                postConfirmEmail({ email }, (res) => {
                    expect(res.status).toBe(BAD_REQUEST);
                    expect(res.body.status).toBe(STATUS.ERROR);
                    expect(res.body.payload).toEqual(
                        createFailed('Account', 'User', email)
                    );
                    done();
                });
            });
        });

        it(`should response a JSON object within error payload and a status code of "${BAD_REQUEST}" if the user did not exist.`, (done) => {
            postConfirmEmail({ email }, (res) => {
                expect(res.status).toBe(BAD_REQUEST);
                expect(res.body.status).toBe(STATUS.ERROR);
                expect(res.body.payload).toEqual(
                    docNotFound('User', 'email', email)
                );
                done();
            });
        });

        it(`should response a JSON object with status code of "${OK}" if the user email confirmed.`, (done) => {
            signUpUser((res) => {
                expect(res.status).toBe(CREATED);
                expect(res.body.status).toBe(STATUS.SUCCESS);
                expect(res.body.payload).toBeNull();

                postConfirmEmail({ email }, (res) => {
                    expect(res.status).toBe(OK);
                    expect(res.body.status).toBe(STATUS.SUCCESS);
                    expect(res.body.payload).toEqual({
                        email,
                        isValidated: true,
                    });
                    done();
                });
            });
        });
    });

    describe(`"POST:${signUp}"`, () => {
        afterEach(async () => {
            await Server.resetDB();
        });

        it(`should response a JSON object with status code of "${CREATED}" if a new user created.`, (done) => {
            signUpUser((res) => {
                expect(res.status).toBe(CREATED);
                expect(res.body.status).toBe(STATUS.SUCCESS);
                expect(res.body.payload).toBeNull();
                done();
            });
        });

        it(`should response a JSON object within error payload and a status code of "${BAD_REQUEST}" if the passwords did not match.`, (done) => {
            const user = createUserMock(),
                passwordConfirm = 'asdfgh',
                locale = 'en',
                body = Object.assign({}, user, { passwordConfirm, locale });

            postSignUp(body, (res) => {
                expect(res.status).toBe(BAD_REQUEST);
                expect(res.body.status).toBe(STATUS.ERROR);
                expect(res.body.payload[0].msg).toBe(
                    PasswordValidationErrors.PASSWORDS_NOT_MATCH
                );
                done();
            });
        });

        it(`should response a JSON object within error payload and a status code of "${BAD_REQUEST}" if the email taken.`, (done) => {
            signUpUser((res) => {
                expect(res.status).toBe(CREATED);
                expect(res.body.status).toBe(STATUS.SUCCESS);
                expect(res.body.payload).toBeNull();

                signUpUser((res) => {
                    expect(res.status).toBe(BAD_REQUEST);
                    expect(res.body.status).toBe(STATUS.ERROR);
                    expect(res.body.payload).toEqual(docExist('Email', email));
                    done();
                });
            });
        });
    });

    /******************************************************************************
     **                                  SIGN IN
     ******************************************************************************/

    describe(`"POST:${signIn}"`, () => {
        afterEach(async () => {
            await Server.resetDB();
        });

        /******************************************************************************
         *                                !INPUT ERRORS
         *****************************************************************************/

        /* ------------------------- Missing @param "email" ------------------------- */
        it(`should response a JSON object within error payload and a status code of
        "${BAD_REQUEST}" if email is missing.`, (done) => {
            // Ignore missing param "email".
            // @ts-ignore
            postSignIn({ password: '12345' }, (res) => {
                expect(res.status).toBe(BAD_REQUEST);
                expect(res.body.status).toBe(STATUS.ERROR);
                expect(res.body.type).toBe(ErrorTypes.INVALID_FIELDS);
                expect(res.body.payload[0].msg).toBe(
                    EmailValidationErrors.INVALID_EMAIL
                );
                done();
            });
        });

        /* ------------------------ Missing @param "password" ----------------------- */
        it(`should response a JSON object within error payload and a status code of
        "${BAD_REQUEST}" if password is missing.`, (done) => {
            // Ignore missing param "password".
            // @ts-ignore
            postSignIn({ email }, (res) => {
                expect(res.status).toBe(BAD_REQUEST);
                expect(res.body.status).toBe(STATUS.ERROR);
                expect(res.body.type).toBe(ErrorTypes.INVALID_FIELDS);
                expect(res.body.payload[0].msg).toBe(
                    PasswordValidationErrors.EMPTY_PASSWORD
                );
                done();
            });
        });

        /******************************************************************************
         *                         !ERROR - NOT FOUND BY EMAIL
         *****************************************************************************/
        it(`should response a JSON object within error payload and a status code of
        "${BAD_REQUEST}" if user not found by email.`, (done) => {
            const user = createUserMock();
            user.email = 'notfound@email.com';

            postSignIn(user, (res) => {
                expect(res.status).toBe(BAD_REQUEST);
                expect(res.body.status).toBe(STATUS.ERROR);
                expect(res.body.type).toBe(ErrorTypes.EMAIL_NOT_CONFIRMED);
                expect(res.body.payload).toBe(emailNotConfirmed(user.email));
                done();
            });
        });

        /******************************************************************************
         *                       !ERROR - EMAIL NOT CONFIRMED
         *****************************************************************************/
        it(`should response a JSON object within error payload and a status code of
        "${BAD_REQUEST}" if email not confirmed.`, (done) => {
            type SignInUserParams = Parameters<typeof signInUser>;
            const signIn = (
                    body: SignInUserParams[0],
                    cb: SignInUserParams[1]
                ) => {
                    signUpUser((res) => {
                        expect(res.status).toBe(CREATED);
                        expect(res.body.status).toBe(STATUS.SUCCESS);
                        expect(res.body.payload).toBeNull();

                        signInUser(body, cb);
                    });
                },
                user = createUserMock();

            signIn(user, (res) => {
                expect(res.status).toBe(BAD_REQUEST);
                expect(res.body.status).toBe(STATUS.ERROR);
                expect(res.body.type).toBe(ErrorTypes.EMAIL_NOT_CONFIRMED);
                expect(res.body.payload).toBe(emailNotConfirmed(user.email));
                done();
            });
        });

        /****************************************************************************
         *                      !ERROR - PASSWORD DOES NOT MATCH
         ****************************************************************************/
        it(`should response a JSON object within error payload and a status code of
        "${BAD_REQUEST}" if password does not match.`, (done) => {
            const user = createUserMock();
            user.password = 'different_pass';

            postSignIn(user, (res) => {
                expect(res.status).toBe(BAD_REQUEST);
                expect(res.body.status).toBe(STATUS.ERROR);
                expect(res.body.type).toBe(ErrorTypes.PASSWORD_INVALID);
                expect(res.body.payload).toBe(invalidPass(user.email));
                done();
            });
        });

        /******************************************************************************
         *             !ERROR - UPDATE USER FAILED ON "signIn" middleware
         *****************************************************************************/
        it(`should response a JSON object within error payload and a status code of
        "${BAD_REQUEST}" if update user failed.`, (done) => {
            spyOn(UserService.prototype, 'updateUserById').and.resolveTo(
                undefined
            );

            postSignIn(createUserMock(), (res) => {
                expect(res.status).toBe(BAD_REQUEST);
                expect(res.body.status).toBe(STATUS.ERROR);
                expect(res.body.type).toBe(ErrorTypes.MUTATE_FAILED);
                done();
            });
        });

        /******************************************************************************
         **                              SIGNIN SUCCESS
         *****************************************************************************/
        it(`should response a JSON object within user document and a status code of
        "${OK}" if sign in succeed.`, (done) => {
            const user = createUserMock();

            postSignIn(user, (res) => {
                expect(res.status).toBe(OK);
                expect(res.body.status).toBe(STATUS.SUCCESS);
                expect(res.body.payload.account).toBeTruthy();
                expect(res.body.payload.account.tax_no).toBe('');
                expect(res.body.payload.account.company_name).toBe('');
                expect(res.body.payload.account.balance).toEqual({
                    $numberDecimal: '0.00',
                });
                expect(res.body.payload.email).toBe(user.email);
                expect(res.body.payload.name).toBe(user.name);
                done();
            });
        });
    });

    /******************************************************************************
     **                                 SIGN OUT
     ******************************************************************************/

    describe(`"DELETE:${signOut}"`, () => {
        afterEach(async () => {
            await Server.resetDB();
        });

        /******************************************************************************
         **                              SIGN OUT SUCCESS
         *****************************************************************************/
        it(`should response a JSON object and a status code of
        "${OK}" if sign out succeed.`, (done) => {
            const user = createUserMock();

            postSignIn(user, (res) => {
                expect(res.status).toBe(OK);
                expect(res.body.status).toBe(STATUS.SUCCESS);
                expect(res.body.payload.account).toBeTruthy();
                expect(res.body.payload.email).toBe(user.email);
                expect(res.body.payload.name).toBe(user.name);

                deleteSignOut((res) => {
                    expect(res.status).toBe(OK);
                    expect(res.body.status).toBe(STATUS.SUCCESS);
                    expect(res.body.payload).toBeNull();

                    done();
                });
            });
        });
    });
});
