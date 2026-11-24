import concertImage from '../../../../assets/ott-image/live-entertainment.webp';
import { ROUTES } from '../../../../router/routes';

/** Ticker under the hero. */
export const HOME_MARQUEE = [
  'Live TV',
  'Movies',
  'Web Series',
  'Sports',
  'Regional Entertainment',
  'Family Entertainment',
  'Smart TVs',
  'Android TV',
  'Streaming Devices',
  'Smartphones',
  'Tablets',
];

/** Full-width band between the category tiles and "Why Choose Us". */
export const HOME_BAND = {
  image: concertImage,
  eyebrow: 'One Connected Experience',
  title: 'Live TV, movies, series and sports — *together on every screen.*',
  text: 'Hi Reach Digital Media brings together modern television experiences and digital streaming entertainment through IPTV and OTT services.',
  action: { label: 'Explore Entertainment', to: ROUTES.entertainment },
};
