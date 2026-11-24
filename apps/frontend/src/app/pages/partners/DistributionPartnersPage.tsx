import { PageHero } from '../../../components';
import { useDocumentTitle } from '../../../hooks';
import {
  EcosystemBenefitsSection,
  OnboardingSection,
  PartnerEnquirySection,
  PathwaysSection,
} from './components';
import { PARTNERS_HERO } from './data';
import { DistributionPartnersPageRoot } from './DistributionPartnersPage.style';

export function DistributionPartnersPage() {
  useDocumentTitle('Distribution Partners');

  return (
    <DistributionPartnersPageRoot>
      <PageHero {...PARTNERS_HERO} />
      <PathwaysSection />
      <EcosystemBenefitsSection />
      <OnboardingSection />
      <PartnerEnquirySection />
    </DistributionPartnersPageRoot>
  );
}
