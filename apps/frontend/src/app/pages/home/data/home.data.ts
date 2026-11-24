import { ROUTES } from '../../../../router/routes';

// Placeholder marketing copy — replace with final content.

export const HERO_CONTENT = {
  title: 'Grow your brand with HiReach Digital Media',
  subtitle:
    'Digital marketing, branding and web experiences that turn attention into results.',
  primaryCta: { label: 'Get in touch', to: ROUTES.contact },
  secondaryCta: { label: 'Our services', to: ROUTES.services },
};

export const SERVICES_PREVIEW_CONTENT = {
  eyebrow: 'What we do',
  title: 'Services built to grow your reach',
  viewAll: { label: 'View all services', to: ROUTES.services },
  /** How many services to show on the home page. */
  count: 3,
};

export interface Reason {
  title: string;
  description: string;
}

export const WHY_CHOOSE_US = {
  eyebrow: 'Why HiReach',
  title: 'A partner focused on results',
  reasons: [
    {
      title: 'Strategy first',
      description: 'Every campaign starts with your goals and your audience.',
    },
    {
      title: 'Creative that performs',
      description: 'Design and content made to be noticed and to convert.',
    },
    {
      title: 'Transparent reporting',
      description: 'Clear numbers on what is working and what we change next.',
    },
  ] satisfies Reason[],
};

export const CTA_CONTENT = {
  title: 'Ready to reach more customers?',
  subtitle: 'Tell us about your business and we will suggest a plan.',
  cta: { label: 'Start a conversation', to: ROUTES.contact },
};
