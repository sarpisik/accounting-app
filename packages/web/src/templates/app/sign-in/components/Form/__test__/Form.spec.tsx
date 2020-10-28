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
    INPUT_PASSWORD,
} from '../../../../../../../../shared-types/lib';
import {
    EmailValidationErrors,
    ErrorTypes,
    PasswordValidationErrors,
} from '../../../../../../../../shared-types/lib/entities/shared';
import { SignInApi } from '../../../../../../lib';

describe(`"COMPONENT: ${Form.name}"`, () => {
    const inputTestIds = Object.values(TEST_IDS).map(
            (value) => value['data-testid']
        ),
        blurInputsToBeRendered = () => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
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
            expect(screen.getByTestId('sign-in-form')).toBeInTheDocument();
        });

        /******************************************************************************
         *                             !EMPTY INPUTS ERROR
         *****************************************************************************/
        it('should render "required" errors when input fields are blurred and empty', async () => {
            blurInputsToBeRendered();

            await waitFor(() => {
                expect(
                    screen.getByText(
                        translates.translations.views['sign-in'].form.email
                            .error.required
                    )
                ).toBeInTheDocument();
                expect(
                    screen.getByText(
                        translates.translations.views['sign-in'].form.password
                            .error.required
                    )
                ).toBeInTheDocument();
            });
        });

        it('should reset form on clicked reset button.', async () => {
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
                expect(screen.getByTestId('sign-in-form')).toHaveFormValues({
                    email: '',
                    password: '',
                });
                expect(
                    screen.queryByText(
                        translates.translations.views['sign-in'].form.email
                            .error.invalid
                    )
                ).toBeNull();
                expect(
                    screen.queryByText(
                        translates.translations.views[
                            'sign-in'
                        ].form.password.error.min.replace(
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
                    target: { value: 'abc' },
                }))
                .forEach(({ id, target }) => {
                    fireEvent.change(screen.getByTestId(id), { target });
                });

            blurInputsToBeRendered();

            await waitFor(() => {
                expect(
                    screen.getByText(
                        translates.translations.views['sign-in'].form.email
                            .error.invalid
                    )
                ).toBeInTheDocument();
                expect(
                    screen.getByText(
                        translates.translations.views[
                            'sign-in'
                        ].form.password.error.min.replace(
                            /{{min}}/,
                            `${INPUT_PASSWORD.min}`
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
                        translates.translations.views[
                            'sign-in'
                        ].form.email.error.max.replace(
                            /{{max}}/,
                            `${INPUT_EMAIL.max}`
                        )
                    )
                ).toBeInTheDocument();

                // Should not render.
                [
                    translates.translations.views['sign-in'].form.email.error
                        .invalid,
                    translates.translations.views['sign-in'].form.email.error
                        .invalidLength,
                    translates.translations.views['sign-in'].form.email.error
                        .required,
                    translates.translations.views[
                        'sign-in'
                    ].form.email.error.min.replace(
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
                password: '123456',
            },
            submitForm = () => {
                fireEvent.submit(screen.getByTestId('sign-in-form'));
            },
            setMockApiResponse = (payload: any) => {
                mockApi = mockApi.mockResolvedValueOnce({
                    status: 'ERROR',
                    type: ErrorTypes.INVALID_FIELDS,
                    payload,
                });
            };

        beforeEach(() => {
            mockApi = jest.spyOn(SignInApi, 'signInUser');
            renderWithStore({ ui: <Form /> });

            fireEvent.change(screen.getByTestId(inputTestIds[0]), {
                target: { value: formValues.email },
            });
            fireEvent.change(screen.getByTestId(inputTestIds[1]), {
                target: { value: formValues.password },
            });
        });

        afterEach(() => {
            mockApi.mockRestore();
        });

        /*******************************************************************************
         *                              !ERRORS
         *******************************************************************************/

        /* *************************** VALIDATION ERRORS *************************** */
        it(`should render error on "${EmailValidationErrors.EMPTY_EMAIL}"`, async () => {
            setMockApiResponse([
                { param: 'email', msg: EmailValidationErrors.EMPTY_EMAIL },
            ]);

            submitForm();

            await waitFor(() => {
                expect(
                    screen.queryByText(
                        translates.translations.views['sign-in'].form.email
                            .error.required
                    )
                ).toBeInTheDocument();
            });
        });

        it(`should render error on "${EmailValidationErrors.INVALID_EMAIL}"`, async () => {
            setMockApiResponse([
                {
                    param: 'email',
                    msg: EmailValidationErrors.INVALID_EMAIL,
                },
            ]);

            submitForm();

            await waitFor(() => {
                expect(
                    screen.queryByText(
                        translates.translations.views['sign-in'].form.email
                            .error.invalid
                    )
                ).toBeInTheDocument();
            });
        });

        it(`should render error on "${EmailValidationErrors.INVALID_EMAIL_LENGTH}"`, async () => {
            setMockApiResponse([
                {
                    param: 'email',
                    msg: EmailValidationErrors.INVALID_EMAIL_LENGTH,
                },
            ]);

            submitForm();

            await waitFor(() => {
                expect(
                    screen.queryByText(
                        translates.translations.views['sign-in'].form.email
                            .error.invalidLength
                    )
                ).toBeInTheDocument();
            });
        });

        it(`should render error on "${PasswordValidationErrors.EMPTY_PASSWORD}"`, async () => {
            setMockApiResponse([
                {
                    param: 'email',
                    msg: PasswordValidationErrors.EMPTY_PASSWORD,
                },
            ]);

            submitForm();

            await waitFor(() => {
                expect(
                    screen.queryByText(
                        translates.translations.views['sign-in'].form.password
                            .error.required
                    )
                ).toBeInTheDocument();
            });
        });

        it(`should render error on "${PasswordValidationErrors.INVALID_PASSWORD_LENGTH}"`, async () => {
            setMockApiResponse([
                {
                    param: 'email',
                    msg: PasswordValidationErrors.INVALID_PASSWORD_LENGTH,
                },
            ]);

            submitForm();

            await waitFor(() => {
                expect(
                    screen.queryByText(
                        translates.translations.views['sign-in'].form.password
                            .error.invalidLength
                    )
                ).toBeInTheDocument();
            });
        });

        it(`should render error on "unExpectedError"`, async () => {
            setMockApiResponse([
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
        it(`should render "${ErrorTypes.EMAIL_NOT_CONFIRMED}" error.`, async () => {
            mockApi = mockApi.mockResolvedValueOnce({
                status: 'ERROR',
                type: ErrorTypes.EMAIL_NOT_CONFIRMED,
            });

            submitForm();

            await waitFor(() => {
                expect(
                    screen.queryByText(
                        translates.translations.views['sign-in'].error
                            .emailNotConfirmed
                    )
                ).toBeInTheDocument();
            });
        });

        it(`should render "${ErrorTypes.PASSWORD_INVALID}" error.`, async () => {
            mockApi = mockApi.mockResolvedValueOnce({
                status: 'ERROR',
                type: ErrorTypes.PASSWORD_INVALID,
            });

            submitForm();

            await waitFor(() => {
                expect(
                    screen.queryByText(
                        translates.translations.views['sign-in'].error
                            .passwordInvalid
                    )
                ).toBeInTheDocument();
            });
        });

        it('should render un expected error.', async () => {
            mockApi = mockApi.mockRejectedValueOnce({
                status: 'ERROR',
                type: ErrorTypes.BAD_REQUEST,
            });

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
            mockApi = mockApi.mockRejectedValueOnce({
                status: 'ERROR',
                type: ErrorTypes.BAD_REQUEST,
            });

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
            mockApi = mockApi.mockResolvedValueOnce({
                status: 'SUCCESS',
                payload: { email: formValues.email },
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
                expect(screen.getByTestId('sign-in-form')).toHaveFormValues({
                    email: '',
                    password: '',
                });
                expect(
                    screen.queryByText(
                        translates.translations.views['sign-in'].success
                    )
                ).toBeInTheDocument();
            });
        });
    });
});
