import React from 'react';
import PropTypes from 'prop-types';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider as TP } from '@material-ui/core/styles';

import { getThemeByName } from './themes';
import { useMode } from '../gatsby-plugin-dark-mode/hooks';

interface Props {
    children: React.ReactNode;
}

export default function ThemeProvider(props: Props): React.ReactElement {
    const { mode } = useMode();

    return (
        <TP theme={getThemeByName(mode)}>
            <CssBaseline />
            {props.children}
        </TP>
    );
}

ThemeProvider.propTypes = {
    children: PropTypes.node,
};
