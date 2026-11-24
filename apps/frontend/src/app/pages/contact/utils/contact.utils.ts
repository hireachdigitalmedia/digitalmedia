import type {
  BusinessCategory,
  ContactPayload,
  ContactTopic,
} from '../../../../api';
import type { EnquiryType } from '../data';

export interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  city: string;
  message: string;
  /** Partner-only fields (shown when the enquiry type is "partner"). */
  company: string;
  businessCategory: BusinessCategory | '';
  state: string;
}

export const EMPTY_CONTACT_FORM: ContactFormValues = {
  name: '',
  email: '',
  phone: '',
  city: '',
  message: '',
  company: '',
  businessCategory: '',
  state: '',
};

const TOPIC_BY_TYPE: Record<EnquiryType, ContactTopic> = {
  consumer: 'consumer',
  partner: 'partnership',
  general: 'general',
};

/** Builds the API payload for the chosen enquiry type; partner fields are only sent for partners. */
export function toContactPayload(
  values: ContactFormValues,
  type: EnquiryType,
): ContactPayload {
  const base: ContactPayload = {
    topic: TOPIC_BY_TYPE[type],
    name: values.name.trim(),
    email: values.email.trim(),
    phone: values.phone.trim(),
    city: values.city.trim(),
    message: values.message.trim(),
  };
  if (type !== 'partner') return base;
  return {
    ...base,
    company: values.company.trim(),
    businessCategory: values.businessCategory || undefined,
    state: values.state.trim(),
  };
}
