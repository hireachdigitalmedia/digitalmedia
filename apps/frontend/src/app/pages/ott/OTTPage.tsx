import { CtaBanner, PageHero } from '../../../components';
import { useDocumentTitle } from '../../../hooks';
import {
  EnquirySection,
  MediaPairSection,
  OttDevicesSection,
  OttFaqSection,
  OttIntroSection,
  RegionalSection,
  StreamingExperienceSection,
} from './components';
import {
  MOVIES_SERIES_CONTENT,
  OTT_CTA_CONTENT,
  OTT_HERO,
  OTT_SECTION_IDS,
  SPORTS_LIVE_CONTENT,
} from './data';
import { OTTPageRoot } from './OTTPage.style';

export function OTTPage() {
  useDocumentTitle('OTT Platforms');

  return (
    <OTTPageRoot>
      <PageHero {...OTT_HERO} />
      <OttIntroSection />
      <MediaPairSection
        id={OTT_SECTION_IDS.categories}
        content={MOVIES_SERIES_CONTENT}
      />
      <RegionalSection />
      <MediaPairSection content={SPORTS_LIVE_CONTENT} />
      <StreamingExperienceSection />
      <OttDevicesSection />
      <EnquirySection />
      <OttFaqSection />
      <CtaBanner {...OTT_CTA_CONTENT} />
    </OTTPageRoot>
  );
}
