import { Alert, Button, TextField } from '@mui/material';
import { useState, type ChangeEvent, type FormEvent } from 'react';
import { getErrorMessage } from '../../../../../api';
import { useSubmitContact } from '../../../../../api-hooks';
import {
  CONTACT_CONTENT,
  INITIAL_CONTACT_FORM,
  type ContactFormValues,
} from '../../data';
import { toContactPayload } from '../../utils';
import { FormRoot } from './ContactForm.style';

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(INITIAL_CONTACT_FORM);
  const submitContact = useSubmitContact();

  const handleChange =
    (field: keyof ContactFormValues) =>
    (event: ChangeEvent<HTMLInputElement>) =>
      setValues((prev) => ({ ...prev, [field]: event.target.value }));

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    submitContact.mutate(toContactPayload(values), {
      onSuccess: () => setValues(INITIAL_CONTACT_FORM),
    });
  };

  return (
    <FormRoot component="form" onSubmit={handleSubmit}>
      {submitContact.isSuccess && (
        <Alert severity="success">{submitContact.data.message}</Alert>
      )}
      {submitContact.isError && (
        <Alert severity="error">{getErrorMessage(submitContact.error)}</Alert>
      )}
      <TextField
        label="Name"
        required
        value={values.name}
        onChange={handleChange('name')}
      />
      <TextField
        label="Email"
        type="email"
        required
        value={values.email}
        onChange={handleChange('email')}
      />
      <TextField
        label="Phone"
        value={values.phone}
        onChange={handleChange('phone')}
      />
      <TextField
        label="Company"
        value={values.company}
        onChange={handleChange('company')}
      />
      <TextField
        label="Message"
        required
        multiline
        minRows={4}
        value={values.message}
        onChange={handleChange('message')}
      />
      <Button
        type="submit"
        variant="contained"
        size="large"
        disabled={submitContact.isPending}
      >
        {submitContact.isPending
          ? CONTACT_CONTENT.submittingLabel
          : CONTACT_CONTENT.submitLabel}
      </Button>
    </FormRoot>
  );
}
