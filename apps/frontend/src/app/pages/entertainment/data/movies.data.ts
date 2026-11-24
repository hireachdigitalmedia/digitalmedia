import familyImage from '../../../../assets/home-image/family.webp';
import moviesImage from '../../../../assets/home-image/movies.webp';
import regionalImage from '../../../../assets/home-image/regional.webp';
import webSeriesImage from '../../../../assets/home-image/web-series.webp';
import type { MediaItem } from '../../../../data/types';

export const MOVIES_CONTENT = {
  eyebrow: 'Category',
  title: 'Movies',
  caption: 'Feature cinema & film collections',
  collections: [
    {
      title: 'Action & Sci-Fi',
      description: 'High-impact theatrical features and visual epics',
      image: moviesImage,
    },
    {
      title: 'Drama & Thrillers',
      description: 'Character-driven cinema and suspense stories',
      image: webSeriesImage,
    },
    {
      title: 'Weekend Classics',
      description: 'All-ages cinema for shared living-room viewing',
      image: familyImage,
    },
    {
      title: 'Regional Cinema',
      description: 'Acclaimed stories in regional languages',
      image: regionalImage,
    },
  ] satisfies MediaItem[],
};
