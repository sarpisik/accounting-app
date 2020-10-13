import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import PageWrapper from './PageWrapper';

export const wrapRootElement = ({ element }) => (
    <I18nextProvider i18n={i18n}>{element}</I18nextProvider>
);

export const wrapPageElement = ({ element, props }) => (
    <PageWrapper locale={props.pageContext.locale}>{element}</PageWrapper>
);
