import React from 'react';
import { TextField } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import {
    INPUT_EMAIL,
    INPUT_PASSWORD,
} from '../../../../../../../../../../../shared-types/lib';

type TextFieldProps = React.ComponentProps<typeof TextField>;
type Props = Omit<TextFieldProps, 'helperText' | 'label'> & {
    helperText: string;
    label: string;
    kind: 'email' | 'password';
};

export function LocalizedInput(props: Props): React.ReactElement {
    const { helperText, label, kind, ...inputProps } = props;
    const { t } = useTranslation();

    return (
        <TextField
            helperText={setDynamicText(t, kind, helperText)}
            label={t(label)}
            margin="dense"
            fullWidth
            {...inputProps}
        />
    );
}

/* --------------------------------- HELPERS -------------------------------- */

function setDynamicText(
    t: ReturnType<typeof useTranslation>['t'],
    kind: Props['kind'],
    text: string
) {
    if (!text) return '';
    if (text.includes('min') || text.includes('max')) {
        const error = kind === 'email' ? INPUT_EMAIL : INPUT_PASSWORD;
        return t(text, error);
    }
    return t(text);
}
