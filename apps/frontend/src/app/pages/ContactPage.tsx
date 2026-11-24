import {
  Alert,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useState, type ChangeEvent, type FormEvent } from 'react';
import { getErrorMessage, type ContactPayload } from '../../api';
import { useSubmitContact } from '../../api-hooks';
import { useDocumentTitle } from '../../hooks';

const emptyForm: ContactPayload = {
  name: '',
  email: '',
  phone: '',
  company: '',
  message: '',
};

export function ContactPage() {
  useDocumentTitle('Contact');
  const [form, setForm] = useState<ContactPayload>(emptyForm);
  const submitContact = useSubmitContact();

  const handleChange =
    (field: keyof ContactPayload) => (event: ChangeEvent<HTMLInputElement>) =>
      setForm((prev) => ({ ...prev, [field]: event.target.value }));

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    submitContact.mutate(
      {
        ...form,
        phone: form.phone || undefined,
        company: form.company || undefined,
      },
      { onSuccess: () => setForm(emptyForm) },
    );
  };

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Contact us
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 4 }}>
        Tell us about your project and we&apos;ll get back to you.
      </Typography>

      <Stack component="form" spacing={2} onSubmit={handleSubmit}>
        {submitContact.isSuccess && (
          <Alert severity="success">{submitContact.data.message}</Alert>
        )}
        {submitContact.isError && (
          <Alert severity="error">{getErrorMessage(submitContact.error)}</Alert>
        )}
        <TextField
          label="Name"
          required
          value={form.name}
          onChange={handleChange('name')}
        />
        <TextField
          label="Email"
          type="email"
          required
          value={form.email}
          onChange={handleChange('email')}
        />
        <TextField
          label="Phone"
          value={form.phone}
          onChange={handleChange('phone')}
        />
        <TextField
          label="Company"
          value={form.company}
          onChange={handleChange('company')}
        />
        <TextField
          label="Message"
          required
          multiline
          minRows={4}
          value={form.message}
          onChange={handleChange('message')}
        />
        <Button
          type="submit"
          variant="contained"
          size="large"
          disabled={submitContact.isPending}
        >
          {submitContact.isPending ? 'Sending…' : 'Send message'}
        </Button>
      </Stack>
    </Container>
  );
}
