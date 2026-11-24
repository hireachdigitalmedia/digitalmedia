import { Alert, Button, Stack, TextField } from '@mui/material';
import { useId, useState, type ChangeEvent, type FormEvent } from 'react';
import { getErrorMessage, type ContactTopic } from '../../api';
import { useSubmitContact } from '../../api-hooks';
import {
  EMPTY_ENQUIRY,
  toEnquiryPayload,
  type EnquiryValues,
} from './EnquiryForm.utils';
import { FieldGrid, FieldLabel, FormCard } from './EnquiryForm.style';

const FIELDS: {
  name: keyof EnquiryValues;
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  autoComplete: string;
}[] = [
  {
    name: 'name',
    label: 'Full Name',
    placeholder: 'Your full name',
    required: true,
    autoComplete: 'name',
  },
  {
    name: 'phone',
    label: 'Phone Number',
    placeholder: '+91 00000 00000',
    type: 'tel',
    autoComplete: 'tel',
  },
  {
    name: 'email',
    label: 'Email Address',
    placeholder: 'you@example.com',
    type: 'email',
    required: true,
    autoComplete: 'email',
  },
  {
    name: 'city',
    label: 'City',
    placeholder: 'Your city',
    autoComplete: 'address-level2',
  },
];

export interface EnquiryFormProps {
  topic: ContactTopic;
  submitLabel: string;
}

/** Short lead form (name, phone, email, city) that posts to /api/contact with a topic. */
export function EnquiryForm({ topic, submitLabel }: EnquiryFormProps) {
  const idPrefix = useId();
  const [values, setValues] = useState<EnquiryValues>(EMPTY_ENQUIRY);
  const submit = useSubmitContact();

  const handleChange =
    (field: keyof EnquiryValues) => (event: ChangeEvent<HTMLInputElement>) =>
      setValues((prev) => ({ ...prev, [field]: event.target.value }));

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    submit.mutate(toEnquiryPayload(values, topic), {
      onSuccess: () => setValues(EMPTY_ENQUIRY),
    });
  };

  return (
    <FormCard>
      <form onSubmit={handleSubmit} noValidate={false}>
        <Stack
          spacing={2}
          sx={{ mb: submit.isSuccess || submit.isError ? 3 : 0 }}
        >
          {submit.isSuccess && (
            <Alert severity="success">{submit.data.message}</Alert>
          )}
          {submit.isError && (
            <Alert severity="error">{getErrorMessage(submit.error)}</Alert>
          )}
        </Stack>
        <FieldGrid>
          {FIELDS.map((field) => {
            const id = `${idPrefix}-${field.name}`;
            return (
              <div key={field.name}>
                <FieldLabel htmlFor={id}>{field.label}</FieldLabel>
                <TextField
                  id={id}
                  fullWidth
                  size="small"
                  type={field.type ?? 'text'}
                  placeholder={field.placeholder}
                  required={field.required}
                  autoComplete={field.autoComplete}
                  value={values[field.name]}
                  onChange={handleChange(field.name)}
                />
              </div>
            );
          })}
        </FieldGrid>
        <Button
          type="submit"
          variant="contained"
          size="large"
          fullWidth
          disabled={submit.isPending}
        >
          {submit.isPending ? 'Sending…' : submitLabel}
        </Button>
      </form>
    </FormCard>
  );
}
