import moviesImage from '../../../../assets/home-image/movies.webp';
import sportsImage from '../../../../assets/home-image/sports.webp';
import webSeriesImage from '../../../../assets/home-image/web-series.webp';
import liveImage from '../../../../assets/ott-image/live-entertainment.webp';
import type { MediaItem } from '../../../../data/types';

export interface MediaPairContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: MediaItem[];
}

export const MOVIES_SERIES_CONTENT: MediaPairContent = {
  eyebrow: 'Cinema & Storytelling',
  title: 'Movies and Web Series.',
  subtitle:
    'Discover feature films, dramatic series, and episodic entertainment experiences designed for immersive viewing.',
  items: [
    {
      title: 'Movies',
      description:
        'Feature films across action, drama, thriller, and family genres through connected OTT platforms.',
      image: moviesImage,
    },
    {
      title: 'Web Series',
      description:
        'Episodic storytelling and multi-season digital series tailored for continuous viewing.',
      image: webSeriesImage,
    },
  ],
};

export const SPORTS_LIVE_CONTENT: MediaPairContent = {
  eyebrow: 'Live & Sports',
  title: 'Sports and Live Entertainment.',
  subtitle:
    'Stay connected to live match coverage, highlights, concerts, and special broadcast events as they happen.',
  items: [
    {
      title: 'Sports',
      description:
        'Follow sporting events, match highlights, and live sports coverage on supported platforms.',
      image: sportsImage,
    },
    {
      title: 'Live Entertainment',
      description:
        'Experience live music performances, stage specials, and digital event broadcasts.',
      image: liveImage,
    },
  ],
};
