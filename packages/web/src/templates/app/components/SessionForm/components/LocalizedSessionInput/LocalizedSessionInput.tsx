import React from 'react';
import { TextField } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

type TextFieldProps = React.ComponentProps<typeof TextField>;
type Props<Kind> = Omit<TextFieldProps, 'helperText' | 'label'> & {
    helperText: string;
    helperTextCondition(text: string): boolean;
    helperTextCb(kind: Kind): object;
    label: string;
    kind: Kind;
};

export function LocalizedSessionInput<Kind>(
    props: Props<Kind>
): React.ReactElement {
    const {
        helperText,
        label,
        kind,
        helperTextCondition,
        helperTextCb,
        ...inputProps
    } = props;
    const { t } = useTranslation();

    return (
        <TextField
            helperText={setDynamicText(
                t,
                helperTextCondition,
                helperTextCb,
                kind,
                helperText
            )}
            label={t(label)}
            margin="dense"
            fullWidth
            {...inputProps}
        />
    );
}

/* --------------------------------- HELPERS -------------------------------- */

function setDynamicText<Kind>(
    t: ReturnType<typeof useTranslation>['t'],
    helperTextCondition: Props<Kind>['helperTextCondition'],
    helperTextCb: Props<Kind>['helperTextCb'],
    kind: Kind,
    text: string
) {
    if (!text) return '';
    if (helperTextCondition(text)) return t(text, helperTextCb(kind));
    return t(text);
}
