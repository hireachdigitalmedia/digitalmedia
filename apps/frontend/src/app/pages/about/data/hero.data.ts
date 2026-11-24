import heroImage from '../../../../assets/partners-image/partners-hero.webp';
import type { ImageAsset } from '../../../../data/types';

export const ABOUT_HERO = {
  badge: 'About Hi Reach Digital Media',
  title: 'Connecting People Through Digital Entertainment.',
  subtitle:
    'Hi Reach Digital Media is a modern digital entertainment company bringing IPTV, OTT, and connected streaming experiences to consumers and distribution partners.',
  image: {
    src: heroImage,
    alt: 'The Hi Reach team collaborating around a screen',
  } satisfies ImageAsset,
};
