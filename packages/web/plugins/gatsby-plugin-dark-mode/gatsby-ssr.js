import React from 'react';
import { DarkModeProvider } from './DarkModeProvider';
import { ENVIRONMENT } from './constants';

export const wrapRootElement = ({ element }) => (
    <DarkModeProvider mode={ENVIRONMENT['server']}>{element}</DarkModeProvider>
);
