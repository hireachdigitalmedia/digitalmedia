import { Section, SectionHeading, StepCards } from '../../../../../components';
import { HOW_IT_WORKS_CONTENT, IPTV_SECTION_IDS } from '../../data';

export function HowItWorksSection() {
  const { eyebrow, title, steps } = HOW_IT_WORKS_CONTENT;

  return (
    <Section glow="left" id={IPTV_SECTION_IDS.howItWorks}>
      <SectionHeading eyebrow={eyebrow} title={title} />
      <StepCards steps={steps} />
    </Section>
  );
}
