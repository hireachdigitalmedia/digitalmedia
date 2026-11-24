/** Services offered — shared by the Home preview and the Services page. */
export interface Service {
  id: string;
  title: string;
  description: string;
}

export const SERVICES: Service[] = [
  {
    id: 'social-media',
    title: 'Social Media Marketing',
    description: 'Content and campaigns that build engaged audiences.',
  },
  {
    id: 'performance-ads',
    title: 'Search & Performance Ads',
    description: 'Paid campaigns optimised for measurable ROI.',
  },
  {
    id: 'branding',
    title: 'Branding & Design',
    description: 'Identities and creative that make you memorable.',
  },
  {
    id: 'web',
    title: 'Website Development',
    description: 'Fast, modern websites that convert visitors.',
  },
];
