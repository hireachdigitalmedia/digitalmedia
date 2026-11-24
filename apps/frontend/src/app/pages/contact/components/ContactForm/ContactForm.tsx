import { Alert, Button, MenuItem } from '@mui/material';
import { useState, type ChangeEvent, type FormEvent } from 'react';
import { getErrorMessage } from '../../../../../api';
import { useSubmitContact } from '../../../../../api-hooks';
import { FormField } from '../../../../../components';
import { BUSINESS_CATEGORY_OPTIONS } from '../../../../../data/business-categories';
import { CONTACT_FORM_CONTENT, PATHWAYS, type EnquiryType } from '../../data';
import {
  EMPTY_CONTACT_FORM,
  toContactPayload,
  type ContactFormValues,
} from '../../utils';
import {
  FieldGrid,
  FormCard,
  FormTitle,
  PartnerNote,
} from './ContactForm.style';

export interface ContactFormProps {
  type: EnquiryType;
  onTypeChange: (type: EnquiryType) => void;
}

export function ContactForm({ type, onTypeChange }: ContactFormProps) {
  const [values, setValues] = useState<ContactFormValues>(EMPTY_CONTACT_FORM);
  const submit = useSubmitContact();
  const { title, submitLabel, submittingLabel, partnerNote } =
    CONTACT_FORM_CONTENT;
  const isPartner = type === 'partner';

  const bind = (field: keyof ContactFormValues) => ({
    value: values[field],
    onChange: (event: ChangeEvent<HTMLInputElement>) =>
      setValues((prev) => ({ ...prev, [field]: event.target.value })),
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    submit.mutate(toContactPayload(values, type), {
      onSuccess: () => setValues(EMPTY_CONTACT_FORM),
    });
  };

  return (
    <FormCard>
      <FormTitle>{title}</FormTitle>
      {submit.isSuccess && (
        <Alert severity="success" sx={{ mb: 3 }}>
          {submit.data.message}
        </Alert>
      )}
      {submit.isError && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {getErrorMessage(submit.error)}
        </Alert>
      )}
      <form onSubmit={handleSubmit}>
        <FieldGrid>
          <FormField
            label="Full Name"
            required
            placeholder="Your full name"
            autoComplete="name"
            {...bind('name')}
          />
          <FormField
            label="Email"
            required
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            {...bind('email')}
          />
          <FormField
            label="Phone"
            required
            type="tel"
            placeholder="+91 00000 00000"
            autoComplete="tel"
            {...bind('phone')}
          />
          <FormField
            label="Enquiry Type"
            required
            select
            value={type}
            onChange={(event) =>
              onTypeChange(event.target.value as EnquiryType)
            }
          >
            {PATHWAYS.map((pathway) => (
              <MenuItem key={pathway.type} value={pathway.type}>
                {pathway.title}
              </MenuItem>
            ))}
          </FormField>

          {isPartner && (
            <>
              <PartnerNote>{partnerNote}</PartnerNote>
              <FormField
                label="Company Name"
                required
                placeholder="Your company or network"
                autoComplete="organization"
                {...bind('company')}
              />
              <FormField
                label="Business Category"
                required
                select
                {...bind('businessCategory')}
                slotProps={{
                  select: {
                    displayEmpty: true,
                    renderValue: (value) =>
                      BUSINESS_CATEGORY_OPTIONS.find((o) => o.value === value)
                        ?.label ?? 'Select business category',
                  },
                }}
              >
                {BUSINESS_CATEGORY_OPTIONS.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </FormField>
            </>
          )}

          <div className={isPartner ? undefined : 'full-width'}>
            <FormField
              label="City"
              required
              placeholder="Your city"
              autoComplete="address-level2"
              {...bind('city')}
            />
          </div>
          {isPartner && (
            <FormField
              label="State"
              required
              placeholder="State"
              autoComplete="address-level1"
              {...bind('state')}
            />
          )}
          <div className="full-width">
            <FormField
              label="Message"
              required
              multiline
              minRows={4}
              placeholder="How can our team assist you?"
              {...bind('message')}
            />
          </div>
        </FieldGrid>
        <Button
          type="submit"
          variant="contained"
          size="large"
          disabled={submit.isPending}
        >
          {submit.isPending ? submittingLabel : submitLabel}
        </Button>
      </form>
    </FormCard>
  );
}
