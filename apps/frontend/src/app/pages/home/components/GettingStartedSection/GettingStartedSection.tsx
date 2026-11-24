import { Section, SectionHeading, StepCards } from '../../../../../components';
import { GETTING_STARTED_CONTENT } from '../../data';

export function GettingStartedSection() {
  const { eyebrow, title, steps } = GETTING_STARTED_CONTENT;

  return (
    <Section tone="raised">
      <SectionHeading eyebrow={eyebrow} title={title} />
      <StepCards steps={steps} />
    </Section>
  );
}
