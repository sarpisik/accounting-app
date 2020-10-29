import React from 'react';
import {
    EmailValidationErrors,
    ErrorTypes,
} from '../../../../../../shared-types/lib/entities/shared';
import { renderWithStore, screen, waitFor } from '../../../../../spec';
import { ConfirmEmail } from '../ConfirmEmail';
import translates from '../../../../../plugins/gatsby-plugin-i18n/locales/en/translate.json';
import { ConfirmEmailApi } from '../../../../lib';
import { confirmEmailTestId, spinnerTestId } from '../contants';

describe(`"VIEW:${ConfirmEmail.name}"`, () => {
    let mockApi: jest.SpyInstance<Promise<unknown>>;

    const email = 'test@example.com',
        confirmEmailTranslates = translates.translations.views['confirm-email'],
        setMockApi = () => {
            mockApi = jest.spyOn(ConfirmEmailApi, 'confirmEmail');
        },
        restoreMockApi = () => {
            mockApi.mockRestore();
        };

    describe('success', () => {
        beforeEach(setMockApi);
        afterEach(restoreMockApi);

        /*******************************************************************************
         **                               SUCCESS
         *******************************************************************************/

        /* ***************************** INITIAL RENDER ***************************** */

        it('renders', async () => {
            mockApi = mockApi.mockResolvedValueOnce({
                status: 'SUCCESS',
                payload: { email, isvalidated: true },
            });

            renderWithStore({ ui: <ConfirmEmail email={email} /> });

            expect(
                screen.queryByTestId(confirmEmailTestId)
            ).toBeInTheDocument();

            await waitFor(() => {
                expect(
                    screen.queryByText(confirmEmailTranslates.success)
                ).toBeInTheDocument();
            });
        });
    });

    describe('errors', () => {
        const emailErrors =
                translates.translations.views['sign-in'].form.email.error,
            setMockApiResponseError = (payload: unknown, type?: ErrorTypes) => {
                mockApi = mockApi.mockResolvedValueOnce({
                    status: 'ERROR',
                    type,
                    payload,
                });
            },
            setInvalidFieldResponse = (msg: EmailValidationErrors) => {
                setMockApiResponseError(
                    [{ params: 'email', msg }],
                    ErrorTypes.INVALID_FIELDS
                );
            },
            expectSpinnerRendered = () => {
                expect(screen.queryByTestId(spinnerTestId)).toBeInTheDocument();
            };

        beforeEach(setMockApi);
        afterEach(restoreMockApi);

        /*******************************************************************************
         *                                    !ERRORS
         *******************************************************************************/

        /* ****************************** INVALID EMAIL ***************************** */
        it(`renders "${EmailValidationErrors.INVALID_EMAIL}" error.`, async () => {
            setInvalidFieldResponse(EmailValidationErrors.INVALID_EMAIL);

            renderWithStore({ ui: <ConfirmEmail email={email} /> });

            // Loading
            await waitFor(expectSpinnerRendered);

            // Error
            await waitFor(() => {
                expect(
                    screen.queryByText(emailErrors.invalid)
                ).toBeInTheDocument();
            });
        });

        /* ************************** INVALID EMAIL LENGTH ************************** */
        it(`renders "${EmailValidationErrors.INVALID_EMAIL_LENGTH}" error.`, async () => {
            setInvalidFieldResponse(EmailValidationErrors.INVALID_EMAIL_LENGTH);

            renderWithStore({ ui: <ConfirmEmail email={email} /> });

            // Loading
            await waitFor(expectSpinnerRendered);

            // Error
            await waitFor(() => {
                expect(
                    screen.queryByText(emailErrors.invalidLength)
                ).toBeInTheDocument();
            });
        });

        /* ***************************** EMAIL REQUIRED ***************************** */
        it(`renders "${EmailValidationErrors.EMPTY_EMAIL}" error.`, async () => {
            setInvalidFieldResponse(EmailValidationErrors.EMPTY_EMAIL);

            renderWithStore({ ui: <ConfirmEmail email={email} /> });

            // Loading
            await waitFor(expectSpinnerRendered);

            // Error
            await waitFor(() => {
                expect(
                    screen.queryByText(emailErrors.required)
                ).toBeInTheDocument();
            });
        });

        /* ************************** ACCOUNT CREATE FAILED ************************* */
        it(`renders "${ErrorTypes.CREATE_FAILED}" error.`, async () => {
            setMockApiResponseError(null, ErrorTypes.CREATE_FAILED);

            renderWithStore({ ui: <ConfirmEmail email={email} /> });

            // Loading
            await waitFor(expectSpinnerRendered);

            // Error
            await waitFor(() => {
                expect(
                    screen.queryByText(
                        confirmEmailTranslates.error.createFailed
                    )
                ).toBeInTheDocument();
            });
        });

        /* ***************************** EMAIL NOT FOUND **************************** */
        it(`renders "${ErrorTypes.NOT_FOUND}" error.`, async () => {
            setMockApiResponseError(null, ErrorTypes.NOT_FOUND);

            renderWithStore({ ui: <ConfirmEmail email={email} /> });

            // Loading
            await waitFor(expectSpinnerRendered);

            // Error
            await waitFor(() => {
                expect(
                    screen.queryByText(confirmEmailTranslates.error.notFound)
                ).toBeInTheDocument();
            });
        });

        /* **************************** UN EXPECTED ERROR *************************** */
        it(`renders "un expected" error.`, async () => {
            setMockApiResponseError(null, undefined);

            renderWithStore({ ui: <ConfirmEmail email={email} /> });

            // Loading
            await waitFor(expectSpinnerRendered);

            // Error
            await waitFor(() => {
                expect(
                    screen.queryByText(
                        translates.translations.api.session.unExpectedError
                    )
                ).toBeInTheDocument();
            });
        });
    });
});
