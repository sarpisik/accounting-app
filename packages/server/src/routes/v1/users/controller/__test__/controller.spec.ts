import {
    DeleteUser,
    GetUser,
    IUser,
    PostUser,
    PutUser,
} from '@shared-types/entities';
import { ErrorTypes } from '@shared-types/entities/shared';
import { UserPath } from '@shared-types/routes';
import { deleteFailed, docNotFound, mutateFailed } from '@shared/constants';
import {
    errorPayload,
    pErr,
    SuccessPayload,
    successPayload,
} from '@shared/functions';
import { createApp, Request, _App } from '@spec/helpers';
import { StatusCodes } from 'http-status-codes';
import supertest from 'supertest';
import { UserService } from '../../service';
import { UserDefaults } from '../../service/utils/createDefaults/createDefaults';

describe('Users Router', () => {
    let Server: _App, api: Request;

    // constants
    const basePath = new UserPath().path,
        { BAD_REQUEST, CREATED, OK } = StatusCodes,
        // helpers
        concatPaths = (subPath: string) => basePath.concat(subPath),
        // Api requests
        callApiPost = (body: Record<string, unknown>) =>
            api.post(basePath, body),
        callApiGet = (subPath: string) => api.get(concatPaths(subPath)),
        callApiPut = (subPath: string, body: Record<string, unknown>) =>
            api.put(concatPaths(subPath), body),
        callApiDelete = (subPath: string) => api.delete(concatPaths(subPath)),
        createUserMock: () => PostUser['req']['body'] = () => ({
            email: 'test@example.com',
            name: 'Test User',
            password: '123456',
        }),
        postUser = <B>(cb: (body: SuccessPayload<B>) => void) => {
            const body = createUserMock(),
                response = successPayload({ email: body.email });

            callApiPost(body).end((err, res) => {
                pErr(err);
                expect(res.status).toBe(CREATED);
                expect(res.body.status).toBe(response.status);
                expect(res.body.payload).toEqual(response.payload);
                cb(res.body);
            });
        },
        getUserByEmail = (cb: supertest.CallbackHandler | undefined) => {
            // Create user
            postUser<{ email: string }>(({ payload: { email } }) => {
                // Fetch user by email
                callApiGet(`/${email}?by=email`).end(cb);
            });
        };

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

    describe(`"GET:${basePath}/:param"`, () => {
        afterEach(async () => {
            await Server.resetDB();
        });

        it(`it should response a JSON object within error payload and a status code of "${BAD_REQUEST}" if the user not found by email.`, (done) => {
            const email = 'test@example.com',
                query = 'email',
                response = errorPayload(
                    ErrorTypes.NOT_FOUND,
                    docNotFound('User', query, email)
                );

            callApiGet(`/${email}?by=${query}`).end((err, res) => {
                pErr(err);
                expect(res.status).toBe(BAD_REQUEST);
                expect(res.body.status).toBe(response.status);
                expect(res.body.payload).toEqual(response.payload);
                done();
            });
        });

        it(`it should response a JSON object within found user by email and a status code of "${OK}" if the request was successful.`, (done) => {
            getUserByEmail((err, res) => {
                const { status } = res.body as GetUser['resBody']['success'];

                pErr(err);
                expect(res.status).toBe(OK);
                expect(status).toBe('SUCCESS');

                done();
            });
        });

        it(`it should response a JSON object within found user by id and a status code of "${OK}" if the request was successful.`, (done) => {
            getUserByEmail((err, res) => {
                const { _id, email } = res.body
                    .payload as GetUser['resBody']['success']['payload'];

                // Fetch user by retrieved id
                callApiGet(`/${_id}?by=id`).end((err, res) => {
                    const {
                        payload,
                        status,
                    } = res.body as GetUser['resBody']['success'];

                    pErr(err);
                    expect(res.status).toBe(OK);
                    expect(status).toBe('SUCCESS');
                    expect(_id).toEqual(payload._id);
                    expect(email).toEqual(payload.email);

                    done();
                });
            });
        });
    });

    describe(`"POST:${basePath}"`, () => {
        it(`it should response a JSON object within the user email and a status code of "${CREATED}" if the request was successful.`, (done) => {
            postUser<{ email: string }>(({ payload: { email }, status }) => {
                // Validate created user
                callApiGet(`/${email}?by=email`).end((err, res) => {
                    const { account, authorize, email, isValidated } = res.body
                        .payload as UserDefaults &
                        Pick<IUser, 'email' | 'name'>;

                    pErr(err);
                    expect(res.status).toBe(OK);
                    expect(res.body.status).toBe(status);
                    expect(account).toBeNull();
                    expect(authorize).toEqual('MASTER');
                    expect(email).toEqual(email);
                    expect(typeof isValidated === 'string').toBeTrue();

                    done();
                });
            });
        });

        it(`it should response a JSON object within error payload and a status code of "${BAD_REQUEST}" if the request was fail.`, (done) => {
            const body = createUserMock(),
                errMsg = 'User create failed.',
                response = errorPayload(ErrorTypes.BAD_REQUEST, errMsg);

            // Mock insert db
            spyOn(UserService.prototype, 'addUser').and.throwError(errMsg);

            callApiPost(body).end((err, res) => {
                pErr(err);
                expect(res.status).toBe(BAD_REQUEST);
                expect(res.body.status).toBe(response.status);
                expect(res.body.payload).toEqual(response.payload);
                done();
            });
        });
    });

    describe(`"PUT:${basePath}/:param"`, () => {
        afterEach(async () => {
            await Server.resetDB();
        });

        it(`it should response a JSON object within error payload and a status code of "${BAD_REQUEST}" if the user not found by email.`, (done) => {
            const email = 'test@example.com',
                query = 'email',
                response = errorPayload(
                    ErrorTypes.NOT_FOUND,
                    docNotFound('User', query, email)
                );

            callApiPut(`/email-confirmation/${email}?by=${query}`, {}).end(
                (err, res) => {
                    pErr(err);
                    expect(res.status).toBe(BAD_REQUEST);
                    expect(res.body.status).toBe(response.status);
                    expect(res.body.payload).toEqual(response.payload);
                    done();
                }
            );
        });

        it(`it should response a JSON object within updated user by email query and a status code of "${OK}" if the request was successful.`, (done) => {
            getUserByEmail((err, res) => {
                const query = 'email',
                    { payload } = res.body as GetUser['resBody']['success'];
                pErr(err);

                callApiPut(
                    `/email-confirmation/${payload.email}?by=${query}`,
                    Object.assign({}, payload, { isValidated: true })
                ).end((err, res) => {
                    const {
                        status,
                    } = res.body as PutUser['resBody']['success'];

                    pErr(err);
                    expect(res.status).toBe(OK);
                    expect(status).toBe('SUCCESS');

                    done();
                });
            });
        });

        it(`it should response a JSON object within updated user by id query and a status code of "${OK}" if the request was successful.`, (done) => {
            getUserByEmail((err, res) => {
                const query = 'id',
                    { payload } = res.body as GetUser['resBody']['success'];
                pErr(err);

                callApiPut(
                    `/email-confirmation/${payload._id}?by=${query}`,
                    Object.assign({}, payload, { isValidated: true })
                ).end((err, res) => {
                    const {
                        status,
                    } = res.body as PutUser['resBody']['success'];

                    pErr(err);
                    expect(res.status).toBe(OK);
                    expect(status).toBe('SUCCESS');

                    done();
                });
            });
        });

        it(`it should response a JSON object within error payload and a status code of "${BAD_REQUEST}" if the user update was fail.`, (done) => {
            spyOn(UserService.prototype, 'updateUserById').and.resolveTo(
                undefined
            );

            getUserByEmail((err, res) => {
                const query = 'id',
                    { payload } = res.body as GetUser['resBody']['success'],
                    response = errorPayload(
                        ErrorTypes.MUTATE_FAILED,
                        mutateFailed('User', query, payload._id)
                    );

                pErr(err);

                callApiPut(
                    `/email-confirmation/${payload._id}?by=${query}`,
                    Object.assign({}, payload, { isValidated: true })
                ).end((err, res) => {
                    pErr(err);
                    expect(res.status).toBe(BAD_REQUEST);
                    expect(res.body.status).toBe(response.status);
                    expect(res.body.payload).toEqual(response.payload);
                    done();
                });
            });
        });
    });

    describe(`"DELETE:${basePath}/:param"`, () => {
        afterEach(async () => {
            await Server.resetDB();
        });

        it(`it should response a JSON object within error payload and a status code of "${BAD_REQUEST}" if the delete user failed.`, (done) => {
            spyOn(UserService.prototype, 'deleteUserById').and.resolveTo(
                undefined
            );

            getUserByEmail((err, res) => {
                const query = 'id',
                    { payload } = res.body as GetUser['resBody']['success'],
                    response = errorPayload(
                        ErrorTypes.DELETE_FAILED,
                        deleteFailed('User', query, payload._id)
                    );

                pErr(err);

                callApiDelete(`/${payload._id}?by=${query}`).end((err, res) => {
                    pErr(err);
                    expect(res.status).toBe(BAD_REQUEST);
                    expect(res.body.status).toBe(response.status);
                    expect(res.body.payload).toEqual(response.payload);
                    done();
                });
            });
        });

        it(`it should response a JSON object and a status code of "${OK}" if the request was successful.`, (done) => {
            getUserByEmail((err, res) => {
                const query = 'id',
                    { payload } = res.body as GetUser['resBody']['success'];
                pErr(err);

                callApiDelete(`/${payload._id}?by=${query}`).end((err, res) => {
                    const {
                        status,
                        payload,
                    } = res.body as DeleteUser['resBody']['success'];

                    pErr(err);
                    expect(res.status).toBe(OK);
                    expect(status).toBe('SUCCESS');
                    expect(payload).toBe(null);

                    done();
                });
            });
        });
    });
});
