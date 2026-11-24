// Placeholder copy — replace with final content.

export const ABOUT_INTRO = {
  title: 'About HiReach Digital Media',
  subtitle:
    'We help businesses grow their reach online through strategy, creative and technology.',
};

export interface Value {
  title: string;
  description: string;
}

export const VALUES_CONTENT = {
  eyebrow: 'Our values',
  title: 'How we work',
  values: [
    {
      title: 'Clarity',
      description: 'Simple plans, honest communication and clear reporting.',
    },
    {
      title: 'Craft',
      description: 'Thoughtful design and content in everything we ship.',
    },
    {
      title: 'Growth',
      description: 'We measure success by the results our clients see.',
    },
  ] satisfies Value[],
};
