import familyImage from '../../../../assets/home-image/family.webp';
import moviesImage from '../../../../assets/home-image/movies.webp';
import regionalImage from '../../../../assets/home-image/regional.webp';
import sportsImage from '../../../../assets/home-image/sports.webp';
import webSeriesImage from '../../../../assets/home-image/web-series.webp';
import type { VisualKey } from '../../../../data/types';
import { CATEGORY_IDS, categoryLink } from '../../../../router/routes';

export interface Category {
  title: string;
  image?: string;
  visual?: VisualKey;
  to: string;
}

export const CATEGORIES_CONTENT = {
  eyebrow: 'Entertainment Categories',
  title: 'Something for Everyone.',
  categories: [
    {
      title: 'Movies',
      image: moviesImage,
      to: categoryLink(CATEGORY_IDS.movies),
    },
    {
      title: 'Web Series',
      image: webSeriesImage,
      to: categoryLink(CATEGORY_IDS.webSeries),
    },
    {
      title: 'Live Television',
      visual: 'tv-guide',
      to: categoryLink(CATEGORY_IDS.liveTv),
    },
    {
      title: 'Sports',
      image: sportsImage,
      to: categoryLink(CATEGORY_IDS.sports),
    },
    {
      title: 'Regional Content',
      image: regionalImage,
      to: categoryLink(CATEGORY_IDS.regional),
    },
    {
      title: 'Family Entertainment',
      image: familyImage,
      to: categoryLink(CATEGORY_IDS.family),
    },
  ] satisfies Category[],
};
