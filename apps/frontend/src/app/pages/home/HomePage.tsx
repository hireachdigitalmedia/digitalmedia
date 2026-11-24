import { useDocumentTitle } from '../../../hooks';
import {
  CategoriesSection,
  DevicesSection,
  DistributionSection,
  EcosystemSection,
  FaqSection,
  FinalCtaSection,
  GettingStartedSection,
  HeroSection,
  IntroSection,
  IptvSection,
  OttSection,
  WhyChooseUsSection,
} from './components';
import { HomePageRoot } from './HomePage.style';

export function HomePage() {
  useDocumentTitle();

  return (
    <HomePageRoot>
      <HeroSection />
      <IntroSection />
      <IptvSection />
      <OttSection />
      <CategoriesSection />
      <WhyChooseUsSection />
      <DevicesSection />
      <DistributionSection />
      <EcosystemSection />
      <GettingStartedSection />
      <FaqSection />
      <FinalCtaSection />
    </HomePageRoot>
  );
}
