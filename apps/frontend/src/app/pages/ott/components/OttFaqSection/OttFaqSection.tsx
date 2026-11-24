import {
  FaqAccordion,
  Section,
  SectionHeading,
} from '../../../../../components';
import { OTT_FAQ_CONTENT, OTT_SECTION_IDS } from '../../data';

export function OttFaqSection() {
  const { eyebrow, title, faqs } = OTT_FAQ_CONTENT;

  return (
    <Section id={OTT_SECTION_IDS.faq} maxWidth="md">
      <SectionHeading eyebrow={eyebrow} title={title} />
      <FaqAccordion faqs={faqs} />
    </Section>
  );
}
