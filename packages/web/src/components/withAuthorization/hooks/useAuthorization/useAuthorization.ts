import { useAuth } from '../../../../../plugins/gatsby-plugin-redux/store';
import { useNavigate } from '@reach/router';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { localizedPath, PATHS } from '../../../../templates/app/lib';

export function useAuthorization(): ReturnType<typeof useAuth> {
    const auth = useAuth(),
        navigate = useNavigate(),
        translate = useTranslation();

    useEffect(
        function navigateOnMounted() {
            if (!auth.user)
                navigate(
                    localizedPath(
                        translate.i18n.language as Parameters<
                            typeof localizedPath
                        >[0],
                        [PATHS.APP, PATHS.SIGN_IN]
                    )
                );
        },

        // Skip dep "navigate".
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [auth, translate.i18n.language]
    );

    return auth;
}
