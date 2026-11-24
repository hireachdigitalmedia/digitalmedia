import { TextField, type TextFieldProps } from '@mui/material';
import { useId } from 'react';
import { FieldLabel } from './FormField.style';

export type FormFieldProps = Omit<TextFieldProps, 'label' | 'id'> & {
  label: string;
};

/** Text field with its label above the input (design-system form style). */
export function FormField({ label, required, ...props }: FormFieldProps) {
  const id = useId();
  return (
    <div>
      <FieldLabel htmlFor={id}>
        {label}
        {required && ' *'}
      </FieldLabel>
      <TextField
        id={id}
        fullWidth
        size="small"
        required={required}
        {...props}
      />
    </div>
  );
}
