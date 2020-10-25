import React from 'react';
import { PageProps } from '../types';

export default function SignIn(props: PageProps): React.ReactElement {
    console.log('sign in page rendered');

    return <div data-testid="sign-in-view">sign in page</div>;
}
