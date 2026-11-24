import type { BusinessCategory } from '../../../../api';

export const PARTNER_ENQUIRY_CONTENT = {
  eyebrow: 'Partner With Us',
  title: 'Distribution Partner Enquiry',
  subtitle:
    'Complete the form below to start a conversation about IPTV and OTT distribution opportunities.',
  submitLabel: 'Become a Distribution Partner',
  submittingLabel: 'Sending…',
};

/** Options for the "Business Category" select (values match the backend). */
export const BUSINESS_CATEGORY_OPTIONS: {
  value: BusinessCategory;
  label: string;
}[] = [
  { value: 'isp', label: 'Internet Service Provider' },
  { value: 'broadband-operator', label: 'Broadband Operator' },
  { value: 'cable-tv-operator', label: 'Cable TV Operator' },
  { value: 'regional-distributor', label: 'Regional Distributor' },
  {
    value: 'digital-entertainment-partner',
    label: 'Digital Entertainment Partner',
  },
  { value: 'other', label: 'Other' },
];
