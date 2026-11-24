import { Section, SectionHeading } from '../../../../../components';
import { PARTNER_SECTION_IDS } from '../../../../../router/routes';
import { PARTNER_ENQUIRY_CONTENT } from '../../data';
import { PartnerEnquiryForm } from '../PartnerEnquiryForm';

export function PartnerEnquirySection() {
  const { eyebrow, title, subtitle } = PARTNER_ENQUIRY_CONTENT;

  return (
    <Section id={PARTNER_SECTION_IDS.enquiry} maxWidth="md">
      <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <PartnerEnquiryForm />
    </Section>
  );
}
