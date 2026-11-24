import heroImage from '../../../../assets/ott-image/ott-hero.webp';
import type { CtaAction, ImageAsset } from '../../../../data/types';
import { OTT_SECTION_IDS } from './section-ids';

export const OTT_HERO = {
  badge: 'OTT Platforms',
  title: ['Your Entertainment.', 'Your Way.'],
  subtitle:
    'Explore digital streaming experiences and OTT entertainment through connected platforms.',
  primaryAction: {
    label: 'Enquire About OTT',
    sectionId: OTT_SECTION_IDS.enquiry,
  } satisfies CtaAction,
  secondaryAction: {
    label: 'Explore Categories',
    sectionId: OTT_SECTION_IDS.categories,
  } satisfies CtaAction,
  image: {
    src: heroImage,
    alt: 'A viewer browsing streaming content on a tablet in front of a TV',
  } satisfies ImageAsset,
};
