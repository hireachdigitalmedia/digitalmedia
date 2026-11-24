export const ROUTES = {
  home: '/',
  about: '/about',
  services: '/services',
  contact: '/contact',
} as const;

export interface NavItem {
  label: string;
  to: string;
}

/** Main navigation, used by the Header and Footer. */
export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', to: ROUTES.home },
  { label: 'About', to: ROUTES.about },
  { label: 'Services', to: ROUTES.services },
  { label: 'Contact', to: ROUTES.contact },
];
