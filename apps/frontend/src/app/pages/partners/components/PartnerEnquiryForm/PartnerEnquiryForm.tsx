import ArrowForward from '@mui/icons-material/ArrowForward';
import { Alert, Button, MenuItem, Stack } from '@mui/material';
import { useState, type ChangeEvent, type FormEvent } from 'react';
import { getErrorMessage } from '../../../../../api';
import { useSubmitContact } from '../../../../../api-hooks';
import { FormField } from '../../../../../components';
import { BUSINESS_CATEGORY_OPTIONS, PARTNER_ENQUIRY_CONTENT } from '../../data';
import {
  EMPTY_PARTNER_ENQUIRY,
  toPartnerPayload,
  type PartnerEnquiryValues,
} from '../../utils';
import { FieldGrid, FormCard } from './PartnerEnquiryForm.style';

export function PartnerEnquiryForm() {
  const [values, setValues] = useState<PartnerEnquiryValues>(
    EMPTY_PARTNER_ENQUIRY,
  );
  const submit = useSubmitContact();
  const { submitLabel, submittingLabel } = PARTNER_ENQUIRY_CONTENT;

  const bind = (field: keyof PartnerEnquiryValues) => ({
    value: values[field],
    onChange: (event: ChangeEvent<HTMLInputElement>) =>
      setValues((prev) => ({ ...prev, [field]: event.target.value })),
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    submit.mutate(toPartnerPayload(values), {
      onSuccess: () => setValues(EMPTY_PARTNER_ENQUIRY),
    });
  };

  return (
    <FormCard>
      <form onSubmit={handleSubmit}>
        {(submit.isSuccess || submit.isError) && (
          <Stack sx={{ mb: 3 }}>
            {submit.isSuccess && (
              <Alert severity="success">{submit.data.message}</Alert>
            )}
            {submit.isError && (
              <Alert severity="error">{getErrorMessage(submit.error)}</Alert>
            )}
          </Stack>
        )}
        <FieldGrid>
          <FormField
            label="Full Name"
            required
            placeholder="Your full name"
            autoComplete="name"
            {...bind('name')}
          />
          <FormField
            label="Company Name"
            required
            placeholder="Your company or network"
            autoComplete="organization"
            {...bind('company')}
          />
          <FormField
            label="Mobile Number"
            required
            type="tel"
            placeholder="+91 00000 00000"
            autoComplete="tel"
            {...bind('phone')}
          />
          <FormField
            label="Business Email"
            required
            type="email"
            placeholder="name@company.com"
            autoComplete="email"
            {...bind('email')}
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
          <FormField
            label="Current Customer Base (Optional)"
            placeholder="Approximate subscriber count"
            {...bind('customerBase')}
          />
          <FormField
            label="City"
            required
            placeholder="City"
            autoComplete="address-level2"
            {...bind('city')}
          />
          <FormField
            label="State"
            required
            placeholder="State"
            autoComplete="address-level1"
            {...bind('state')}
          />
          <div className="full-width">
            <FormField
              label="Message"
              required
              multiline
              minRows={4}
              placeholder="Tell us about your distribution goals and coverage region"
              {...bind('message')}
            />
          </div>
        </FieldGrid>
        <Button
          type="submit"
          variant="contained"
          size="large"
          endIcon={<ArrowForward />}
          disabled={submit.isPending}
        >
          {submit.isPending ? submittingLabel : submitLabel}
        </Button>
      </form>
    </FormCard>
  );
}
