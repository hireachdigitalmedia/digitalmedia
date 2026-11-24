import type { BusinessCategory } from '../api';

/** Options for "Business Category" selects (values match the backend). */
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
