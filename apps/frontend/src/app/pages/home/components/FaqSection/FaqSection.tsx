import {
  FaqAccordion,
  Section,
  SectionHeading,
} from '../../../../../components';
import { SECTION_IDS } from '../../../../../router/routes';
import { FAQ_CONTENT } from '../../data';

export function FaqSection() {
  const { eyebrow, title, faqs } = FAQ_CONTENT;

  return (
    <Section id={SECTION_IDS.faq} maxWidth="md">
      <SectionHeading eyebrow={eyebrow} title={title} />
      <FaqAccordion faqs={faqs} />
    </Section>
  );
}
