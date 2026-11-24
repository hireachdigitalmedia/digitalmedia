import { CtaBanner, ImageBand, PageHero } from '../../../components';
import { useDocumentTitle } from '../../../hooks';
import { AboutPageRoot } from './AboutPage.style';
import {
  AboutEcosystemSection,
  FocusSection,
  VisionMissionSection,
} from './components';
import { ABOUT_BAND, ABOUT_CTA, ABOUT_HERO } from './data';

export function AboutPage() {
  useDocumentTitle('About Us');

  return (
    <AboutPageRoot>
      <PageHero {...ABOUT_HERO} />
      <VisionMissionSection />
      <FocusSection />
      <ImageBand {...ABOUT_BAND} />
      <AboutEcosystemSection />
      <CtaBanner {...ABOUT_CTA} tone="base" />
    </AboutPageRoot>
  );
}
