import { CtaBanner, PageHero } from '../../../components';
import { useDocumentTitle } from '../../../hooks';
import { AboutPageRoot } from './AboutPage.style';
import {
  AboutEcosystemSection,
  FocusSection,
  VisionMissionSection,
} from './components';
import { ABOUT_CTA, ABOUT_HERO } from './data';

export function AboutPage() {
  useDocumentTitle('About Us');

  return (
    <AboutPageRoot>
      <PageHero {...ABOUT_HERO} />
      <VisionMissionSection />
      <FocusSection />
      <AboutEcosystemSection />
      <CtaBanner {...ABOUT_CTA} tone="base" />
    </AboutPageRoot>
  );
}
