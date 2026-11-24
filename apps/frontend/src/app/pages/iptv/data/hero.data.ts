import type { CtaAction } from '../../../../data/types';
import { ROUTES } from '../../../../router/routes';
import { IPTV_SECTION_IDS } from './section-ids';

export const IPTV_HERO = {
  badge: 'IPTV Services',
  title: 'Experience Television in a Connected World.',
  subtitle:
    "Modern IPTV services designed to bring live television, electronic programme guides, and connected viewing experiences to today's digital households.",
  primaryAction: {
    label: 'Enquire About IPTV',
    to: ROUTES.contact,
  } satisfies CtaAction,
  secondaryAction: {
    label: 'How IPTV Works',
    sectionId: IPTV_SECTION_IDS.howItWorks,
  } satisfies CtaAction,
  visual: 'tv-guide' as const,
};
