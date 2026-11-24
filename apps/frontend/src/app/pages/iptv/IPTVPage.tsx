import { CtaBanner, PageHero } from '../../../components';
import { useDocumentTitle } from '../../../hooks';
import {
  CapabilitiesSection,
  HowItWorksSection,
  IptvDevicesSection,
  IptvFaqSection,
  LiveTvSection,
  ResidentialSection,
} from './components';
import { IPTV_CTA_CONTENT, IPTV_HERO } from './data';
import { IPTVPageRoot } from './IPTVPage.style';

export function IPTVPage() {
  useDocumentTitle('IPTV Services');

  return (
    <IPTVPageRoot>
      <PageHero {...IPTV_HERO} />
      <LiveTvSection />
      <CapabilitiesSection />
      <ResidentialSection />
      <HowItWorksSection />
      <IptvDevicesSection />
      <IptvFaqSection />
      <CtaBanner {...IPTV_CTA_CONTENT} />
    </IPTVPageRoot>
  );
}
