import React from 'react';
import { PageProps } from '../types';

export default function SignUp(props: PageProps): React.ReactElement {
    console.log('sign-up page rendered');

    return <div data-testid="sign-up-view">sign-up page</div>;
}
