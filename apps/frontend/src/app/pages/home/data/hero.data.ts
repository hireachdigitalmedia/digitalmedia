import heroImage from '../../../../assets/home-image/hero-living-room.webp';
import { SECTION_IDS } from '../../../../router/routes';

export const HERO_CONTENT = {
  badge: 'IPTV & OTT Digital Entertainment',
  titleLines: ['Entertainment.', 'Connected.', 'Beyond Limits.'],
  subtitle:
    'Discover a world of digital entertainment with innovative IPTV and OTT experiences, bringing movies, television and entertainment closer to you.',
  primaryCta: {
    label: 'Explore Entertainment',
    sectionId: SECTION_IDS.entertainment,
  },
  secondaryCta: { label: 'Explore IPTV Services', sectionId: SECTION_IDS.iptv },
  image: {
    src: heroImage,
    alt: 'A television glowing in a dark living room at night',
  },
};
