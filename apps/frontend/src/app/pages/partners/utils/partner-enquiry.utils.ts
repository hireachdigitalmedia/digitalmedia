import type { BusinessCategory, ContactPayload } from '../../../../api';

export interface PartnerEnquiryValues {
  name: string;
  company: string;
  phone: string;
  email: string;
  businessCategory: BusinessCategory | '';
  customerBase: string;
  city: string;
  state: string;
  message: string;
}

export const EMPTY_PARTNER_ENQUIRY: PartnerEnquiryValues = {
  name: '',
  company: '',
  phone: '',
  email: '',
  businessCategory: '',
  customerBase: '',
  city: '',
  state: '',
  message: '',
};

/** Builds the API payload: trims values, tags the topic, drops the optional field if empty. */
export function toPartnerPayload(values: PartnerEnquiryValues): ContactPayload {
  const customerBase = values.customerBase.trim();
  return {
    topic: 'partnership',
    name: values.name.trim(),
    company: values.company.trim(),
    phone: values.phone.trim(),
    email: values.email.trim(),
    businessCategory: values.businessCategory || undefined,
    city: values.city.trim(),
    state: values.state.trim(),
    message: values.message.trim(),
    ...(customerBase && { customerBase }),
  };
}
