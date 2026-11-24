import familyImage from '../../../../assets/home-image/family.webp';
import liveTvImage from '../../../../assets/home-image/live-tv.webp';
import regionalImage from '../../../../assets/home-image/regional.webp';
import sportsImage from '../../../../assets/home-image/sports.webp';
import webSeriesImage from '../../../../assets/home-image/web-series.webp';
import type { MediaItem } from '../../../../data/types';
import { CATEGORY_IDS } from '../../../../router/routes';

/** Large featured categories (two per row). */
export const FEATURED_CATEGORIES: MediaItem[] = [
  {
    id: CATEGORY_IDS.webSeries,
    eyebrow: 'Category',
    title: 'Web Series',
    description:
      'Multi-episode dramas, mysteries, and serialized storytelling designed for on-demand OTT viewing.',
    image: webSeriesImage,
  },
  {
    id: CATEGORY_IDS.liveTv,
    eyebrow: 'Category',
    title: 'Live TV',
    description:
      'Real-time television programming with electronic programme guide navigation through IPTV services.',
    image: liveTvImage,
  },
];

/** Remaining categories (three per row). */
export const MORE_CATEGORIES: MediaItem[] = [
  {
    id: CATEGORY_IDS.sports,
    eyebrow: 'Category',
    title: 'Sports',
    description:
      'Live match coverage, tournament highlights, and sports programming across connected screens.',
    image: sportsImage,
  },
  {
    id: CATEGORY_IDS.regional,
    eyebrow: 'Category',
    title: 'Regional Entertainment',
    description:
      'Regional language films, serials, music, and cultural shows tailored to local audiences.',
    image: regionalImage,
  },
  {
    id: CATEGORY_IDS.family,
    eyebrow: 'Category',
    title: 'Family Entertainment',
    description:
      'Wholesome movies, animation, and lifestyle shows suited for everyone at home.',
    image: familyImage,
  },
];
