import { useEffect } from 'react';
import { useNavigate as _useNavigate } from '@reach/router';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../../../../plugins/gatsby-plugin-redux/store';
import { localizedPath, PATHS } from '../../../../templates/app/lib';

export function useNavigate() {
    const navigate = _useNavigate(),
        translate = useTranslation(),
        shouldNavigate = Boolean(useAuth().user);

    useEffect(
        function navigateOnSuccess() {
            shouldNavigate &&
                navigate(
                    localizedPath(
                        translate.i18n.language as Parameters<
                            typeof localizedPath
                        >[0],
                        [PATHS.APP]
                    )
                );
        },

        // Skip dep "navigate".
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [shouldNavigate, translate.i18n.language]
    );
}
