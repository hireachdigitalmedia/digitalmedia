import residentialImage from '../../../../assets/iptv-image/residential.webp';
import type { ImageAsset } from '../../../../data/types';

export const RESIDENTIAL_CONTENT = {
  eyebrow: 'Residential Viewing',
  title: 'Made for the Living Room and Beyond.',
  subtitle:
    'Hi Reach Digital Media brings residential IPTV entertainment into connected homes with a clean television interface, straightforward navigation, and support across compatible household screens.',
  points: [
    'Clean, living-room-first television navigation',
    'Available directly or through connected distribution partners',
    'Dedicated customer support for service setup and enquiries',
  ],
  image: {
    src: residentialImage,
    alt: 'A couple relaxing on a sofa watching television',
  } satisfies ImageAsset,
};
