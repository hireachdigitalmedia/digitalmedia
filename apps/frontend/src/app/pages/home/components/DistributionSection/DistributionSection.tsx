import {
  ActionButton,
  CheckList,
  FlowCard,
  Section,
  SectionHeading,
} from '../../../../../components';
import { SECTION_IDS } from '../../../../../router/routes';
import { DISTRIBUTION_CONTENT } from '../../data';
import {
  BenefitsCard,
  Chip,
  ChipList,
  DistributionGrid,
  RightColumn,
} from './DistributionSection.style';

export function DistributionSection() {
  const {
    eyebrow,
    title,
    subtitle,
    partnerTypes,
    cta,
    flowTitle,
    flow,
    benefits,
  } = DISTRIBUTION_CONTENT;

  return (
    <Section id={SECTION_IDS.distribution} tone="raised">
      <DistributionGrid>
        <div>
          <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
          <ChipList data-stagger aria-label="Partner types">
            {partnerTypes.map((type) => (
              <Chip key={type}>{type}</Chip>
            ))}
          </ChipList>
          <ActionButton action={cta} arrow />
        </div>
        <RightColumn>
          <FlowCard title={flowTitle} steps={flow} />
          <BenefitsCard>
            <CheckList items={benefits} columns={2} />
          </BenefitsCard>
        </RightColumn>
      </DistributionGrid>
    </Section>
  );
}
