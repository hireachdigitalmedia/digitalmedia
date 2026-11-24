import type { CtaAction } from '../../../../data/types';
import { ROUTES } from '../../../../router/routes';

export const ENTERTAINMENT_CTA = {
  title: 'Start Exploring IPTV & OTT Services.',
  subtitle:
    'Check service availability in your area or connect with our team to learn more about supported entertainment options.',
  primaryAction: {
    label: 'Explore IPTV Services',
    to: ROUTES.iptv,
  } satisfies CtaAction,
  // Jumps straight to the enquiry form on the OTT page.
  secondaryAction: {
    label: 'Enquire About OTT',
    to: `${ROUTES.ott}#ott-enquiry`,
  } satisfies CtaAction,
};
