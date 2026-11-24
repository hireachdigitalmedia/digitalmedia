import type { Step } from '../../../../data/types';

export const GETTING_STARTED_CONTENT = {
  eyebrow: 'Getting Started',
  title: 'Start Your Entertainment Journey.',
  steps: [
    {
      title: 'Explore Services',
      description:
        'Explore available entertainment services across IPTV and OTT categories.',
    },
    {
      title: 'Choose Your Option',
      description:
        'Choose the appropriate IPTV or OTT option tailored to your viewing preferences.',
    },
    {
      title: 'Check Compatibility',
      description:
        'Check service and device compatibility for your smart TV, mobile, or streaming device.',
    },
    {
      title: 'Connect & Watch',
      description:
        'Contact us or proceed through an authorized subscription flow to get started.',
    },
  ] satisfies Step[],
};
