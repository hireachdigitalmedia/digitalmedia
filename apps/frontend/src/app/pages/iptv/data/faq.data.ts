import type { Faq } from '../../../../data/types';

// Draft answers — review with the business before launch.
export const IPTV_FAQ_CONTENT = {
  eyebrow: 'IPTV Support',
  title: 'IPTV Frequently Asked Questions',
  faqs: [
    {
      question: 'What is IPTV and how does it work?',
      answer:
        'IPTV (Internet Protocol Television) delivers live TV channels over an IP network instead of cable or satellite. You watch through a supported app on your TV or device, with an on-screen programme guide to browse channels and schedules.',
    },
    {
      question: 'What devices can I use for IPTV?',
      answer:
        'Supported Smart TVs, Android TV, streaming devices, smartphones and tablets. Compatibility depends on the selected IPTV service and its supported application.',
    },
    {
      question: 'Do I need a broadband connection for IPTV?',
      answer:
        'Yes. IPTV streams over the internet, so you need a stable broadband connection. Our team can advise on what works best for your home.',
    },
    {
      question: 'Can ISPs or cable operators distribute IPTV?',
      answer:
        'Yes. Internet service providers, broadband and cable TV operators and regional distributors can offer IPTV to their subscribers through our distribution partner programme.',
    },
  ] satisfies Faq[],
};
