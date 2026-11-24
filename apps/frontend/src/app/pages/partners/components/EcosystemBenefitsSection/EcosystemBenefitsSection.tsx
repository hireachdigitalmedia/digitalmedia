import {
  CheckList,
  FlowCard,
  Section,
  SectionHeading,
} from '../../../../../components';
import { BENEFITS_CONTENT } from '../../data';
import {
  BenefitsCard,
  BenefitsGrid,
  BenefitsTitle,
} from './EcosystemBenefitsSection.style';

export function EcosystemBenefitsSection() {
  const { eyebrow, title, flow, benefitsTitle, benefits } = BENEFITS_CONTENT;

  return (
    <Section>
      <BenefitsGrid data-stagger>
        <div>
          <SectionHeading eyebrow={eyebrow} title={title} />
          <FlowCard steps={flow} />
        </div>
        <BenefitsCard>
          <BenefitsTitle>{benefitsTitle}</BenefitsTitle>
          <CheckList items={benefits} />
        </BenefitsCard>
      </BenefitsGrid>
    </Section>
  );
}
