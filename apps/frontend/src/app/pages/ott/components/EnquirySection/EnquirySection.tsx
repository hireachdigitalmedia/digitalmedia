import {
  EnquiryForm,
  Section,
  SectionHeading,
} from '../../../../../components';
import { OTT_ENQUIRY_CONTENT, OTT_SECTION_IDS } from '../../data';
import { EnquiryGrid } from './EnquirySection.style';

export function EnquirySection() {
  const { eyebrow, title, subtitle, submitLabel } = OTT_ENQUIRY_CONTENT;

  return (
    <Section id={OTT_SECTION_IDS.enquiry} tone="raised">
      <EnquiryGrid>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
          disableGutter
        />
        <EnquiryForm topic="ott" submitLabel={submitLabel} />
      </EnquiryGrid>
    </Section>
  );
}
