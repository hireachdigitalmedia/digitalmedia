import { IconCard, Section, SectionHeading } from '../../../../../components';
import { WHY_CHOOSE_US_CONTENT } from '../../data';
import { ReasonGrid } from './WhyChooseUsSection.style';

export function WhyChooseUsSection() {
  const { eyebrow, title, reasons } = WHY_CHOOSE_US_CONTENT;

  return (
    <Section tone="raised">
      <SectionHeading eyebrow={eyebrow} title={title} />
      <ReasonGrid data-stagger>
        {reasons.map((reason) => (
          <IconCard key={reason.title} {...reason} />
        ))}
      </ReasonGrid>
    </Section>
  );
}
