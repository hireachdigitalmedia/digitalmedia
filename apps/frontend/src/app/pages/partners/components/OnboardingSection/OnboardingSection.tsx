import { Section, SectionHeading, StepCards } from '../../../../../components';
import { PARTNER_SECTION_IDS } from '../../../../../router/routes';
import { ONBOARDING_CONTENT } from '../../data';

export function OnboardingSection() {
  const { eyebrow, title, steps } = ONBOARDING_CONTENT;

  return (
    <Section glow="left" id={PARTNER_SECTION_IDS.onboarding} tone="raised">
      <SectionHeading eyebrow={eyebrow} title={title} />
      <StepCards steps={steps} columns={steps.length} />
    </Section>
  );
}
