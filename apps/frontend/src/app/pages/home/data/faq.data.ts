export interface Faq {
  question: string;
  answer: string;
}

// Draft answers — review with the business before launch.
export const FAQ_CONTENT = {
  eyebrow: 'Support & Answers',
  title: 'Frequently Asked Questions',
  faqs: [
    {
      question: 'What is IPTV?',
      answer:
        'IPTV (Internet Protocol Television) delivers live television channels over an internet connection instead of a traditional cable or satellite signal.',
    },
    {
      question: 'What is OTT?',
      answer:
        'OTT ("over-the-top") services stream movies, series and other content on demand over the internet, through apps on your TV, phone or tablet.',
    },
    {
      question: 'What is the difference between IPTV and OTT?',
      answer:
        'IPTV focuses on live, scheduled television channels delivered over a managed network, while OTT focuses on on-demand content you choose and watch whenever you like.',
    },
    {
      question: 'Which devices are supported?',
      answer:
        'Services can be watched on smart TVs, Android TV, streaming devices, smartphones and tablets. Compatibility depends on the selected service and supported application.',
    },
    {
      question: 'How can I enquire about IPTV services?',
      answer:
        'Send us your details through the contact page and our team will share the IPTV options available to you.',
    },
    {
      question: 'How do I access OTT services?',
      answer:
        'Choose an OTT option, then sign in through the supported app on your compatible device. Our team can guide you through setup.',
    },
    {
      question: 'Are services available in my area?',
      answer:
        'Availability depends on your location and our partner network. Contact us with your area and we will confirm what is available.',
    },
    {
      question: 'How can I become a distribution partner?',
      answer:
        'Internet service providers, broadband and cable TV operators and regional distributors can apply through the contact page — our partnerships team will get in touch.',
    },
    {
      question: 'How can I contact customer support?',
      answer:
        'Reach our support team through the contact page or by email, and we will respond as soon as possible.',
    },
  ] satisfies Faq[],
};
