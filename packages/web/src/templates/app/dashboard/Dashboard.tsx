import React from 'react';
import { withAuthorization } from '../components';
import { PageProps } from '../types';

export default withAuthorization(Dashboard);

export function Dashboard(props: PageProps): React.ReactElement {
    console.log('dashboard page rendered');

    return <div data-testid="dashboard-view">dashboard page</div>;
}
