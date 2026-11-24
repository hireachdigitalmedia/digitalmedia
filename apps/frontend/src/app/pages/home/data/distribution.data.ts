import { DISTRIBUTION_FLOW } from '../../../../data/distribution';
import { partnerEnquiryLink } from '../../../../router/routes';

export const DISTRIBUTION_CONTENT = {
  eyebrow: 'B2B2C Distribution Ecosystem',
  title: 'Grow Together. Deliver More Entertainment.',
  subtitle:
    'Partner with Hi Reach Digital Media and bring digital entertainment experiences to more customers through a connected distribution ecosystem.',
  partnerTypes: [
    'Internet Service Providers',
    'Broadband Operators',
    'Cable TV Operators',
    'Regional Distributors',
    'Digital Entertainment Partners',
  ],
  cta: { label: 'Become a Distribution Partner', to: partnerEnquiryLink },
  flowTitle: 'Distribution Flow',
  flow: DISTRIBUTION_FLOW,
  benefits: [
    'Entertainment service distribution opportunities',
    'Expanded customer offerings',
    'Partner collaboration',
    'Connected digital entertainment ecosystem',
    'Dedicated business enquiry support',
  ],
};
