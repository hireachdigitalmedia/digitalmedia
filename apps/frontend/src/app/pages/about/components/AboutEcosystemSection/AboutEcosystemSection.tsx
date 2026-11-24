import { InfoCard, Section, SectionHeading } from '../../../../../components';
import { ABOUT_ECOSYSTEM } from '../../data';
import { TwoColumnGrid } from '../VisionMissionSection';

export function AboutEcosystemSection() {
  const { eyebrow, title, subtitle, brands } = ABOUT_ECOSYSTEM;

  return (
    <Section tone="raised">
      <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <TwoColumnGrid data-stagger>
        {brands.map((brand) => (
          <InfoCard key={brand.title} variant="brand" {...brand} />
        ))}
      </TwoColumnGrid>
    </Section>
  );
}
