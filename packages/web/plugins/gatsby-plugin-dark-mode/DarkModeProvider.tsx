import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';
import { EnvironmentType } from './constants';
import { useInitialMode } from './hooks';

interface Props {
    environment: EnvironmentType;
    children: React.ReactNode;
}

export function DarkModeProvider(props: Props): React.ReactElement {
    useInitialMode(props.environment);

    return (
        <React.Fragment>
            <Helmet>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
            </Helmet>
            {props.children}
        </React.Fragment>
    );
}

DarkModeProvider.propTypes = {
    children: PropTypes.node,
};
