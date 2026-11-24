import familyImage from '../../../../assets/home-image/family.webp';
import moviesImage from '../../../../assets/home-image/movies.webp';
import regionalImage from '../../../../assets/home-image/regional.webp';
import sportsImage from '../../../../assets/home-image/sports.webp';
import webSeriesImage from '../../../../assets/home-image/web-series.webp';
import { ROUTES } from '../../../../router/routes';

import type { MediaItem } from '../../../../data/types';

export const OTT_CONTENT = {
  eyebrow: 'OTT Platforms',
  title: 'Streaming Entertainment Without Limits.',
  subtitle:
    'Discover digital streaming experiences that bring movies, series and entertainment together through OTT platforms.',
  cta: { label: 'Explore OTT Platforms', to: ROUTES.ott },
  platforms: [
    {
      title: 'Movies',
      description: 'Feature films and curated cinema collections',
      image: moviesImage,
    },
    {
      title: 'Web Series',
      description: 'Episodic storytelling and binge-worthy seasons',
      image: webSeriesImage,
    },
    {
      title: 'Regional Entertainment',
      description: 'Stories and programmes in regional languages',
      image: regionalImage,
    },
    {
      title: 'Sports',
      description: 'Match action, highlights and sports coverage',
      image: sportsImage,
    },
    {
      title: 'Family Entertainment',
      description: 'Shows and films the whole household can enjoy',
      image: familyImage,
    },
  ] satisfies MediaItem[],
};
