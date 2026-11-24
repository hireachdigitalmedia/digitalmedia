import {
  FaqAccordion,
  Section,
  SectionHeading,
} from '../../../../../components';
import { IPTV_FAQ_CONTENT, IPTV_SECTION_IDS } from '../../data';

export function IptvFaqSection() {
  const { eyebrow, title, faqs } = IPTV_FAQ_CONTENT;

  return (
    <Section id={IPTV_SECTION_IDS.faq} maxWidth="md">
      <SectionHeading eyebrow={eyebrow} title={title} />
      <FaqAccordion faqs={faqs} />
    </Section>
  );
}
