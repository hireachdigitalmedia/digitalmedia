export const ROUTES = {
  home: '/',
  iptv: '/iptv-services',
  ott: '/ott-platforms',
  entertainment: '/entertainment',
  partners: '/distribution-partners',
  about: '/about',
  contact: '/contact',
  legal: '/legal',
} as const;

/** Anchor ids of the home page sections (used for `/#id` links). */
export const SECTION_IDS = {
  iptv: 'iptv-services',
  ott: 'ott-platforms',
  entertainment: 'entertainment',
  distribution: 'distribution-partners',
  faq: 'faq',
} as const;

/** Anchor ids of the category blocks on the Entertainment page. */
export const CATEGORY_IDS = {
  movies: 'movies',
  webSeries: 'web-series',
  liveTv: 'live-tv',
  sports: 'sports',
  regional: 'regional',
  family: 'family',
} as const;

/** Anchor ids of the policies on the Legal page. */
export const LEGAL_IDS = {
  privacy: 'privacy-policy',
  terms: 'terms-and-conditions',
  refund: 'refund-policy',
} as const;

/** Link to a policy on the Legal page. */
export const legalLink = (id: string) => `${ROUTES.legal}#${id}`;

/** Old standalone policy URLs → their section on the Legal page. */
export const LEGAL_REDIRECTS: { from: string; to: string }[] = Object.values(
  LEGAL_IDS,
).map((id) => ({ from: `/${id}`, to: legalLink(id) }));

/** Anchor ids on the Distribution Partners page. */
export const PARTNER_SECTION_IDS = {
  onboarding: 'onboarding-process',
  enquiry: 'partner-enquiry',
} as const;

/** Link straight to the distribution partner enquiry form. */
export const partnerEnquiryLink = `${ROUTES.partners}#${PARTNER_SECTION_IDS.enquiry}`;

/** Link to a category on the Entertainment page. */
export const categoryLink = (id: string) => `${ROUTES.entertainment}#${id}`;

const homeSection = (id: string) => `${ROUTES.home}#${id}`;

export interface NavItem {
  label: string;
  to: string;
}

/** Main navigation (header). */
export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', to: ROUTES.home },
  { label: 'IPTV Services', to: ROUTES.iptv },
  { label: 'OTT Platforms', to: ROUTES.ott },
  { label: 'Entertainment', to: ROUTES.entertainment },
  { label: 'Distribution Partners', to: ROUTES.partners },
  { label: 'About Us', to: ROUTES.about },
  { label: 'Contact Us', to: ROUTES.contact },
];

export const GET_STARTED = { label: 'Get Started', to: ROUTES.contact };

export interface FooterColumn {
  title: string;
  links: NavItem[];
}

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: 'Quick Links',
    links: [
      { label: 'Home', to: ROUTES.home },
      { label: 'IPTV Services', to: ROUTES.iptv },
      { label: 'OTT Platforms', to: ROUTES.ott },
      { label: 'Entertainment', to: ROUTES.entertainment },
      { label: 'About Us', to: ROUTES.about },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'IPTV', to: ROUTES.iptv },
      { label: 'OTT', to: ROUTES.ott },
      {
        label: 'Digital Entertainment',
        to: ROUTES.entertainment,
      },
    ],
  },
  {
    title: 'Partners',
    links: [
      {
        label: 'Distribution Partners',
        to: ROUTES.partners,
      },
      { label: 'Become a Partner', to: partnerEnquiryLink },
    ],
  },
  {
    title: 'Support & Legal',
    links: [
      { label: 'FAQs', to: homeSection(SECTION_IDS.faq) },
      { label: 'Contact Us', to: ROUTES.contact },
      { label: 'Privacy Policy', to: legalLink(LEGAL_IDS.privacy) },
      { label: 'Terms and Conditions', to: legalLink(LEGAL_IDS.terms) },
      { label: 'Refund Policy', to: legalLink(LEGAL_IDS.refund) },
    ],
  },
];
