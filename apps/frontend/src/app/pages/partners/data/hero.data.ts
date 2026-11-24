import heroImage from '../../../../assets/partners-image/partners-hero.webp';
import type { CtaAction, ImageAsset } from '../../../../data/types';
import { PARTNER_SECTION_IDS } from '../../../../router/routes';

export const PARTNERS_HERO = {
  badge: 'B2B2C Distribution Ecosystem',
  title: 'Let’s Bring Digital Entertainment to More People.',
  subtitle:
    'Collaborate with Hi Reach Digital Media to explore IPTV and OTT distribution opportunities and expand digital entertainment access for customers.',
  primaryAction: {
    label: 'Become a Distribution Partner',
    sectionId: PARTNER_SECTION_IDS.enquiry,
  } satisfies CtaAction,
  secondaryAction: {
    label: 'Onboarding Process',
    sectionId: PARTNER_SECTION_IDS.onboarding,
  } satisfies CtaAction,
  image: {
    src: heroImage,
    alt: 'A team collaborating around a computer screen',
  } satisfies ImageAsset,
};
