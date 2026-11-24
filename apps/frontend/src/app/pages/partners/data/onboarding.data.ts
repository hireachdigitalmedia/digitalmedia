import type { Step } from '../../../../data/types';

export const ONBOARDING_CONTENT = {
  eyebrow: 'Onboarding Flow',
  title: 'Partnership Onboarding Process.',
  steps: [
    {
      title: 'Submit Enquiry',
      description: 'Share your business details and region.',
    },
    {
      title: 'Discuss Needs',
      description: 'Review network and customer requirements.',
    },
    {
      title: 'Evaluate Fit',
      description: 'Assess IPTV and OTT distribution opportunities.',
    },
    {
      title: 'Collaborate',
      description: 'Establish formal partnership collaboration.',
    },
    {
      title: 'Launch Access',
      description: 'Begin service distribution, subject to agreement.',
    },
  ] satisfies Step[],
};
