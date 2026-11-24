import type { ContactPayload } from '../../../../api';
import type { ContactFormValues } from '../data';

/** Trims values and drops empty optional fields before sending to the API. */
export function toContactPayload(values: ContactFormValues): ContactPayload {
  const phone = values.phone.trim();
  const company = values.company.trim();
  return {
    name: values.name.trim(),
    email: values.email.trim(),
    message: values.message.trim(),
    ...(phone && { phone }),
    ...(company && { company }),
  };
}
