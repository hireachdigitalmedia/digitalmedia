import { CtaBanner, Marquee, PageHero } from '../../../components';
import { useDocumentTitle } from '../../../hooks';
import {
  FeaturedSection,
  MoreCategoriesSection,
  MoviesSection,
} from './components';
import {
  ENTERTAINMENT_CTA,
  ENTERTAINMENT_HERO,
  ENTERTAINMENT_MARQUEE,
} from './data';
import { EntertainmentPageRoot } from './EntertainmentPage.style';

export function EntertainmentPage() {
  useDocumentTitle('Entertainment');

  return (
    <EntertainmentPageRoot>
      <PageHero {...ENTERTAINMENT_HERO} />
      <Marquee items={ENTERTAINMENT_MARQUEE} label="Entertainment categories" />
      <MoviesSection />
      <FeaturedSection />
      <MoreCategoriesSection />
      <CtaBanner {...ENTERTAINMENT_CTA} />
    </EntertainmentPageRoot>
  );
}
