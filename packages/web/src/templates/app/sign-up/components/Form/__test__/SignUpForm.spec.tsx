/* eslint-disable @typescript-eslint/ban-ts-ignore */
import React from 'react';
import {
    fireEvent,
    renderWithStore,
    screen,
    waitFor,
} from '../../../../../../../spec';
import { TEST_IDS } from '../components/Layout/contants';
import { Form } from '../Form';
import translates from '../../../../../../../plugins/gatsby-plugin-i18n/locales/en/translate.json';
import {
    INPUT_EMAIL,
    INPUT_NAME,
    INPUT_PASSWORD,
} from '../../../../../../../../shared-types/lib';
import {
    EmailValidationErrors,
    ErrorTypes,
    PasswordValidationErrors,
    UserNameValidationErrors,
} from '../../../../../../../../shared-types/lib/entities/shared';
import { SignUpApi } from '../../../../../../lib';
import { signUpFormTestId } from '../components';
import { initialValues } from '../schema';

describe(`"COMPONENT: ${Form.name}"`, () => {
    const inputTestIds = Object.values(TEST_IDS).map(
            (value) => value['data-testid']
        ),
        signUpTranslates = translates.translations.views['sign-up'],
        signInTranslates = translates.translations.views['sign-in'],
        inputs = {
            email: signInTranslates.form.email,
            name: signUpTranslates.form.name,
            password: signInTranslates.form.password,
            passwordConfirm: signUpTranslates.form.passwordConfirm,
        },
        blurInputsToBeRendered = () => {
            // @ts-ignore
            inputTestIds.map(screen.getByTestId).forEach(fireEvent.blur);
        },
        resetForm = () => {
            fireEvent.click(screen.getByTestId('reset-btn'));
        };

    describe('CLIENT SIDE EVENTS', () => {
        beforeEach(() => {
            renderWithStore({ ui: <Form /> });
        });

        /*******************************************************************************
         **                              RENDER SUCCESS
         ******************************************************************************/
        it('should render form', () => {
            expect(screen.getByTestId(signUpFormTestId)).toBeInTheDocument();
            // submit btn
            expect(
                screen.getByText(
                    translates.translations.views['sign-up'].form.submit
                )
            ).toBeInTheDocument();
            // email
            expect(screen.getByText(inputs.email.label)).toBeInTheDocument();
            // password
            expect(screen.getByText(inputs.password.label)).toBeInTheDocument();
            // name
            expect(screen.getByText(inputs.name.label)).toBeInTheDocument();
            // password confirm
            expect(
                screen.getByText(inputs.passwordConfirm.label)
            ).toBeInTheDocument();
        });

        /******************************************************************************
         *                             !EMPTY INPUTS ERROR
         *****************************************************************************/
        it('should render "required" errors when input fields are blurred and empty', async () => {
            blurInputsToBeRendered();

            await waitFor(() => {
                expect(
                    screen.getByText(inputs.email.error.required)
                ).toBeInTheDocument();
                expect(
                    screen.queryAllByText(inputs.password.error.required)
                ).toHaveLength(2);
                expect(
                    screen.getByText(inputs.name.error.required)
                ).toBeInTheDocument();
            });
        });

        it('should reset form on clicked reset button.', async () => {
            const { locale, ..._initialValues } = initialValues;
            inputTestIds
                .map((id) => ({
                    id,
                    target: { value: 'abc' },
                }))
                .forEach(({ id, target }) => {
                    fireEvent.change(screen.getByTestId(id), { target });
                });

            blurInputsToBeRendered();
            resetForm();

            await waitFor(() => {
                expect(screen.getByTestId(signUpFormTestId)).toHaveFormValues(
                    // @ts-ignore
                    _initialValues
                );
                expect(
                    screen.queryByText(inputs.email.error.invalid)
                ).toBeNull();
                expect(
                    screen.queryByText(inputs.name.error.invalidLength)
                ).toBeNull();
                expect(
                    screen.queryByText(inputs.password.error.invalidLength)
                ).toBeNull();
                expect(
                    screen.queryByText(
                        inputs.password.error.min.replace(
                            /{{min}}/,
                            `${INPUT_PASSWORD.min}`
                        )
                    )
                ).toBeNull();
            });
        });

        /*******************************************************************************
         *                              !MIN VALUE ERRORS
         ******************************************************************************/
        it('should render "min" errors when input fields have less than required char long.', async () => {
            inputTestIds
                .map((id) => ({
                    id,
                    target: { value: 'ab' },
                }))
                .forEach(({ id, target }) => {
                    fireEvent.change(screen.getByTestId(id), { target });
                });

            blurInputsToBeRendered();

            await waitFor(() => {
                expect(
                    screen.getByText(inputs.email.error.invalid)
                ).toBeInTheDocument();
                expect(
                    screen.getByText(
                        inputs.password.error.min.replace(
                            /{{min}}/,
                            `${INPUT_PASSWORD.min}`
                        )
                    )
                ).toBeInTheDocument();
                expect(
                    screen.getByText(
                        inputs.name.error.min.replace(
                            /{{min}}/,
                            `${INPUT_NAME.min}`
                        )
                    )
                ).toBeInTheDocument();
            });
        });

        /*******************************************************************************
         *                               !MAX VALUE ERRORS
         *******************************************************************************/
        it(`should render error when email has more then "${INPUT_EMAIL.max}" characters long.`, async () => {
            fireEvent.change(
                screen.getByTestId(TEST_IDS.email['data-testid']),
                {
                    target: {
                        value: 'abc@text.'.concat(
                            'com'.repeat(INPUT_EMAIL.max)
                        ),
                    },
                }
            );

            blurInputsToBeRendered();

            await waitFor(() => {
                // Should render.
                expect(
                    screen.getByText(
                        inputs.email.error.max.replace(
                            /{{max}}/,
                            `${INPUT_EMAIL.max}`
                        )
                    )
                ).toBeInTheDocument();

                // Should not render.
                [
                    inputs.email.error.invalid,
                    inputs.email.error.invalidLength,
                    inputs.email.error.required,
                    inputs.email.error.min.replace(
                        /{{min}}/,
                        `${INPUT_EMAIL.min}`
                    ),
                ].forEach((text) => {
                    expect(screen.queryByText(text)).toBeNull();
                });
            });
        });
    });

    describe('SERVER SIDE EVENTS', () => {
        let mockApi: jest.SpyInstance<Promise<unknown>>;

        const formValues: Exclude<
                React.ComponentProps<typeof Form>['initialState'],
                undefined
            > = {
                email: 'test@example.com',
                name: 'test user',
                password: '123456',
                passwordConfirm: '123456',
                locale: 'en',
            },
            submitForm = () => {
                fireEvent.submit(screen.getByTestId(signUpFormTestId));
            },
            setMockApiResponse = (response: unknown) => {
                mockApi = mockApi.mockResolvedValueOnce(response);
            },
            setMockApiErrorResponse = (
                payload: any,
                type = ErrorTypes.INVALID_FIELDS
            ) => {
                setMockApiResponse({
                    status: 'ERROR',
                    payload,
                    type,
                });
            };

        beforeEach(() => {
            mockApi = jest.spyOn(SignUpApi, 'signUpUser');
            renderWithStore({ ui: <Form /> });

            fireEvent.change(screen.getByTestId(inputTestIds[0]), {
                target: { value: formValues.name },
            });
            fireEvent.change(screen.getByTestId(inputTestIds[1]), {
                target: { value: formValues.email },
            });
            fireEvent.change(screen.getByTestId(inputTestIds[2]), {
                target: { value: formValues.password },
            });
            fireEvent.change(screen.getByTestId(inputTestIds[3]), {
                target: { value: formValues.passwordConfirm },
            });
        });

        afterEach(() => {
            mockApi.mockRestore();
        });

        /*******************************************************************************
         *                              !ERRORS
         *******************************************************************************/

        /* *************************** VALIDATION ERRORS *************************** */
        it(`should render error on "${UserNameValidationErrors.INVALID_NAME_LENGTH}"`, async () => {
            setMockApiErrorResponse([
                {
                    param: 'name',
                    msg: UserNameValidationErrors.INVALID_NAME_LENGTH,
                },
            ]);

            submitForm();

            await waitFor(() => {
                expect(
                    screen.queryByText(inputs.name.error.invalidLength)
                ).toBeInTheDocument();
            });
        });

        it(`should render error on "${EmailValidationErrors.EMPTY_EMAIL}"`, async () => {
            setMockApiErrorResponse([
                { param: 'email', msg: EmailValidationErrors.EMPTY_EMAIL },
            ]);

            submitForm();

            await waitFor(() => {
                expect(
                    screen.queryByText(inputs.email.error.required)
                ).toBeInTheDocument();
            });
        });

        it(`should render error on "${EmailValidationErrors.INVALID_EMAIL}"`, async () => {
            setMockApiErrorResponse([
                {
                    param: 'email',
                    msg: EmailValidationErrors.INVALID_EMAIL,
                },
            ]);

            submitForm();

            await waitFor(() => {
                expect(
                    screen.queryByText(inputs.email.error.invalid)
                ).toBeInTheDocument();
            });
        });

        it(`should render error on "${EmailValidationErrors.INVALID_EMAIL_LENGTH}"`, async () => {
            setMockApiErrorResponse([
                {
                    param: 'email',
                    msg: EmailValidationErrors.INVALID_EMAIL_LENGTH,
                },
            ]);

            submitForm();

            await waitFor(() => {
                expect(
                    screen.queryByText(inputs.email.error.invalidLength)
                ).toBeInTheDocument();
            });
        });

        it(`should render error on "${PasswordValidationErrors.EMPTY_PASSWORD}"`, async () => {
            setMockApiErrorResponse([
                {
                    param: 'password',
                    msg: PasswordValidationErrors.EMPTY_PASSWORD,
                },
            ]);

            submitForm();

            await waitFor(() => {
                expect(
                    screen.queryByText(inputs.password.error.required)
                ).toBeInTheDocument();
            });
        });

        it(`should render error on "${PasswordValidationErrors.INVALID_PASSWORD_LENGTH}"`, async () => {
            setMockApiErrorResponse([
                {
                    param: 'password',
                    msg: PasswordValidationErrors.INVALID_PASSWORD_LENGTH,
                },
            ]);

            submitForm();

            await waitFor(() => {
                expect(
                    screen.queryByText(inputs.password.error.invalidLength)
                ).toBeInTheDocument();
            });
        });

        it(`should render error on "${PasswordValidationErrors.PASSWORDS_NOT_MATCH}"`, async () => {
            setMockApiErrorResponse([
                {
                    param: 'passwordConfirm',
                    msg: PasswordValidationErrors.PASSWORDS_NOT_MATCH,
                },
            ]);

            submitForm();

            await waitFor(() => {
                expect(
                    screen.queryByText(
                        inputs.passwordConfirm.error.passwordsDoNotMatch
                    )
                ).toBeInTheDocument();
            });
        });

        it(`should render error on "unExpectedError"`, async () => {
            setMockApiErrorResponse([
                {
                    param: 'email',
                    msg: 'unExpectedError',
                },
            ]);

            submitForm();

            await waitFor(() => {
                expect(
                    screen.queryAllByText(
                        translates.translations.api.session.unExpectedError
                    )
                ).toHaveLength(2);
            });
        });

        /* ******************************* API ERRROS ******************************* */
        it(`should render "${ErrorTypes.EMAIL_TAKEN}" error.`, async () => {
            setMockApiErrorResponse(undefined, ErrorTypes.EMAIL_TAKEN);

            submitForm();

            await waitFor(() => {
                expect(
                    screen.queryByText(signUpTranslates.error.emailTaken)
                ).toBeInTheDocument();
            });
        });

        it(`should render "${ErrorTypes.PASSWORD_INVALID}" error.`, async () => {
            setMockApiErrorResponse(undefined, ErrorTypes.PASSWORD_INVALID);

            submitForm();

            await waitFor(() => {
                expect(
                    screen.queryByText(signInTranslates.error.passwordInvalid)
                ).toBeInTheDocument();
            });
        });

        it('should render un expected error.', async () => {
            setMockApiErrorResponse(undefined, ErrorTypes.BAD_REQUEST);

            submitForm();

            await waitFor(() => {
                expect(
                    screen.queryByText(
                        translates.translations.api.session.unExpectedError
                    )
                ).toBeInTheDocument();
            });
        });

        it('should close backdrop onclick after render un expected error.', async () => {
            setMockApiErrorResponse(undefined, ErrorTypes.BAD_REQUEST);

            submitForm();

            fireEvent.click(screen.getByTestId('backdrop'));

            await waitFor(() => {
                expect(
                    screen.queryByText(
                        translates.translations.api.session.unExpectedError
                    )
                ).toBeNull();
            });
        });

        /*******************************************************************************
         **                                   SUCCESS
         *******************************************************************************/
        it('should render nothing on success request', async () => {
            const { locale, ..._initialValues } = initialValues;

            setMockApiResponse({
                status: 'SUCCESS',
                payload: null,
            });
            submitForm();

            await waitFor(() => {
                expect(screen.getByTestId('spinner')).toBeInTheDocument();
            });

            await waitFor(() => {
                expect(
                    screen.queryAllByText(
                        translates.translations.api.session.unExpectedError
                    )
                ).toHaveLength(0);

                expect(screen.getByTestId(signUpFormTestId)).toHaveFormValues(
                    // @ts-ignore
                    _initialValues
                );

                expect(
                    screen.queryByText(
                        signUpTranslates.success.replace(
                            /{{email}}/,
                            formValues.email
                        )
                    )
                ).toBeInTheDocument();
            });
        });
    });
});
