import type { Faq } from '../../../../data/types';

// Draft answers — review with the business before launch.
export const OTT_FAQ_CONTENT = {
  eyebrow: 'OTT Support',
  title: 'OTT Frequently Asked Questions',
  faqs: [
    {
      question: 'How do I access OTT services?',
      answer:
        'Choose an OTT option with our team, then sign in through the supported app on your compatible device and start streaming on demand.',
    },
    {
      question: 'Which devices support OTT streaming?',
      answer:
        'Supported Smart TVs, Android TV, streaming devices, smartphones and tablets. Compatibility depends on the selected OTT service and its supported application.',
    },
    {
      question: 'Can I combine IPTV and OTT options?',
      answer:
        'Yes. Many households enjoy live IPTV channels alongside on-demand OTT streaming. Contact us and we will suggest options that fit your viewing.',
    },
  ] satisfies Faq[],
};
