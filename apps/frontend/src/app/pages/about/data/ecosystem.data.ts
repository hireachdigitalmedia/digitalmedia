import type { InfoItem } from '../../../../data/types';

export const ABOUT_ECOSYSTEM = {
  eyebrow: 'Hi Reach Ecosystem',
  title: 'Connected with Hi Reach Broadband.',
  subtitle:
    "Hi Reach Digital Media operates as a distinct digital entertainment brand within the Hi Reach ecosystem—complementing Hi Reach Broadband's internet connectivity with IPTV and OTT entertainment.",
  brands: [
    {
      eyebrow: 'Connectivity',
      title: 'Hi Reach Broadband',
      description:
        'Internet connectivity and broadband services that keep homes and businesses online.',
      accent: 'tertiary',
    },
    {
      eyebrow: 'Entertainment',
      title: 'Hi Reach Digital Media',
      description:
        'IPTV, OTT, and digital entertainment services that keep audiences engaged.',
      highlighted: true,
    },
  ] satisfies InfoItem[],
};
