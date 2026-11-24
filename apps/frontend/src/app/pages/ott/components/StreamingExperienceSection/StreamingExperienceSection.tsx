import { IconCard, Section, SectionHeading } from '../../../../../components';
import { EXPERIENCE_CONTENT } from '../../data';
import { FeatureGrid } from './StreamingExperienceSection.style';

export function StreamingExperienceSection() {
  const { eyebrow, title, features } = EXPERIENCE_CONTENT;

  return (
    <Section tone="raised">
      <SectionHeading eyebrow={eyebrow} title={title} />
      <FeatureGrid data-stagger>
        {features.map((feature) => (
          <IconCard key={feature.title} {...feature} />
        ))}
      </FeatureGrid>
    </Section>
  );
}
