import React from 'react';
import { withUser } from '../../../components/withUser/withUser';
import { PageProps } from '../types';
import { Form } from './components';

export default withUser(SignIn);

export function SignIn(props: PageProps): React.ReactElement {
    console.log('sign in page rendered');

    return (
        <div data-testid="sign-in-view">
            <Form />
        </div>
    );
}
