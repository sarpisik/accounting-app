import React from 'react';
import { withUser } from '../../../components';
import { PageProps } from '../types';
import { Form } from './components';

export default withUser(SignUp);

export const signUpTestId = 'sign-up-view';

export function SignUp(_props: PageProps): React.ReactElement {
    return (
        <div data-testid={signUpTestId}>
            <Form />
        </div>
    );
}
