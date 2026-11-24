import familyImage from '../../../../assets/home-image/family.webp';
import liveTvImage from '../../../../assets/home-image/live-tv.webp';
import moviesImage from '../../../../assets/home-image/movies.webp';
import regionalImage from '../../../../assets/home-image/regional.webp';
import sportsImage from '../../../../assets/home-image/sports.webp';
import webSeriesImage from '../../../../assets/home-image/web-series.webp';
import { ROUTES } from '../../../../router/routes';

export interface Category {
  title: string;
  image: string;
  to: string;
}

export const CATEGORIES_CONTENT = {
  eyebrow: 'Entertainment Categories',
  title: 'Something for Everyone.',
  // TODO: point each category at its own page once those pages exist.
  categories: [
    { title: 'Movies', image: moviesImage, to: ROUTES.contact },
    { title: 'Web Series', image: webSeriesImage, to: ROUTES.contact },
    { title: 'Live Television', image: liveTvImage, to: ROUTES.contact },
    { title: 'Sports', image: sportsImage, to: ROUTES.contact },
    { title: 'Regional Content', image: regionalImage, to: ROUTES.contact },
    { title: 'Family Entertainment', image: familyImage, to: ROUTES.contact },
  ] satisfies Category[],
};
