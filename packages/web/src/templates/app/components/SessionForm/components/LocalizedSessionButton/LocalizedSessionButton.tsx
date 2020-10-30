import React from 'react';
import { Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

type ButtonProps = React.ComponentProps<typeof Button>;
type Props = Omit<ButtonProps, 'variant' | 'children'> & { content: string };

export function LocalizedSessionButton(props: Props): React.ReactElement {
    const { content, ...btnProps } = props;
    const { t } = useTranslation();

    return (
        <Button variant="contained" {...btnProps}>
            {t(content)}
        </Button>
    );
}
