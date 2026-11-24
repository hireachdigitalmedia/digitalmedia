import type { CtaAction } from '../../../../data/types';
import { ROUTES } from '../../../../router/routes';

export const IPTV_CTA_CONTENT = {
  title: 'Ready to Explore IPTV Services?',
  subtitle:
    'Contact our team to check residential IPTV availability or discuss distribution opportunities in your region.',
  primaryAction: {
    label: 'Submit IPTV Enquiry',
    to: ROUTES.contact,
  } satisfies CtaAction,
  secondaryAction: {
    label: 'Back to Homepage',
    to: ROUTES.home,
  } satisfies CtaAction,
};
