import React from 'react';
import { Router } from '@reach/router';
import { useTranslation } from 'react-i18next';
import { PATHS } from '../../../../shared-types/lib';
import { withAuthentication, WrappedPageProps } from '../../components';
import { Dashboard } from './dashboard';
import { localizedPath } from './lib';
import { SignIn } from './sign-in';
import { SignUp } from './sign-up';

export default withAuthentication(App);

function App(props: WrappedPageProps): React.ReactElement {
    const { locale } = props.pageContext,
        { t } = useTranslation();
    console.log(t('app.links.accounts'));

    return (
        <Router basepath={localizedPath(locale, [PATHS.APP])}>
            <SignUp path={PATHS.SIGN_UP} />
            <SignIn path={PATHS.SIGN_IN} />
            <Dashboard default />
        </Router>
    );
}
