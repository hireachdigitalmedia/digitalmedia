import type { CtaAction } from '../../../../data/types';
import { ROUTES } from '../../../../router/routes';

export const OTT_CTA_CONTENT = {
  title: 'Need Help Choosing an OTT Option?',
  subtitle:
    'Connect with Hi Reach Digital Media for service availability, device guidance, or partner enquiries.',
  primaryAction: {
    label: 'Contact Our Team',
    to: ROUTES.contact,
  } satisfies CtaAction,
  secondaryAction: {
    label: 'Explore IPTV Services',
    to: ROUTES.iptv,
  } satisfies CtaAction,
};
