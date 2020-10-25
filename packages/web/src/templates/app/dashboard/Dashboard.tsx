import React from 'react';
import { withAuthorization } from '../../../components';
import { PageProps } from '../types';

export default withAuthorization(Dashboard);

function Dashboard(props: PageProps): React.ReactElement {
    console.log('dashboard page rendered');

    return <div>dashboard page</div>;
}
