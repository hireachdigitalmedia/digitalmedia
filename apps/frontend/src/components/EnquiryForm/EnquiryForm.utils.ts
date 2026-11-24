import type { ContactPayload, ContactTopic } from '../../api';

export interface EnquiryValues {
  name: string;
  phone: string;
  email: string;
  city: string;
}

export const EMPTY_ENQUIRY: EnquiryValues = {
  name: '',
  phone: '',
  email: '',
  city: '',
};

/** Trims values, drops empty optional fields and tags the enquiry topic. */
export function toEnquiryPayload(
  values: EnquiryValues,
  topic: ContactTopic,
): ContactPayload {
  const phone = values.phone.trim();
  const city = values.city.trim();
  return {
    topic,
    name: values.name.trim(),
    email: values.email.trim(),
    ...(phone && { phone }),
    ...(city && { city }),
  };
}
