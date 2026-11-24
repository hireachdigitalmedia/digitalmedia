import { useDocumentTitle } from '../../../hooks';
import {
  CtaSection,
  HeroSection,
  ServicesPreview,
  WhyChooseUs,
} from './components';
import { HomePageRoot } from './HomePage.style';

export function HomePage() {
  useDocumentTitle();

  return (
    <HomePageRoot>
      <HeroSection />
      <ServicesPreview />
      <WhyChooseUs />
      <CtaSection />
    </HomePageRoot>
  );
}
