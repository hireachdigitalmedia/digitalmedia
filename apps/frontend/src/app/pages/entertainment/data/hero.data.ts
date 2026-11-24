import heroImage from '../../../../assets/home-image/hero-living-room.webp';
import type { CtaAction, ImageAsset } from '../../../../data/types';
import { CATEGORY_IDS, ROUTES } from '../../../../router/routes';

export const ENTERTAINMENT_HERO = {
  badge: 'Entertainment Discovery',
  title: 'Discover Entertainment for Every Mood.',
  subtitle:
    'Explore movies, web series, live television, sports, regional programmes, and family entertainment categories across IPTV and OTT experiences. Availability of specific categories and titles depends on the selected service.',
  primaryAction: {
    label: 'Browse Categories',
    sectionId: CATEGORY_IDS.movies,
  } satisfies CtaAction,
  secondaryAction: {
    label: 'Explore OTT Platforms',
    to: ROUTES.ott,
  } satisfies CtaAction,
  image: {
    src: heroImage,
    alt: 'A television glowing in a dark living room at night',
  } satisfies ImageAsset,
};
