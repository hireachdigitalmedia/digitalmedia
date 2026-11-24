import type { CtaAction } from '../../../../data/types';
import { ROUTES } from '../../../../router/routes';

export const ABOUT_CTA = {
  title: 'Connect With Hi Reach Digital Media.',
  subtitle:
    'Have questions about our IPTV and OTT services or distribution opportunities? Reach out to our team.',
  primaryAction: {
    label: 'Contact Us',
    to: ROUTES.contact,
  } satisfies CtaAction,
};
