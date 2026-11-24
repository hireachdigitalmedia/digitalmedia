import { ImageBand, Marquee } from '../../../components';
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
import { HOME_BAND, HOME_MARQUEE } from './data';
import { HomePageRoot } from './HomePage.style';

export function HomePage() {
  useDocumentTitle();

  return (
    <HomePageRoot>
      <HeroSection />
      <Marquee
        items={HOME_MARQUEE}
        label="What Hi Reach Digital Media offers"
      />
      <IntroSection />
      <IptvSection />
      <OttSection />
      <CategoriesSection />
      <ImageBand {...HOME_BAND} />
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
