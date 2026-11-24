import { IconCard, Section, SectionHeading } from '../../../../../components';
import { INTRO_CONTENT } from '../../data';
import { CardGrid } from './IntroSection.style';

export function IntroSection() {
  const { title, subtitle, highlights } = INTRO_CONTENT;

  return (
    <Section tone="raised">
      <SectionHeading title={title} subtitle={subtitle} />
      <CardGrid data-stagger>
        {highlights.map((item) => (
          <IconCard key={item.title} layout="inline" {...item} />
        ))}
      </CardGrid>
    </Section>
  );
}
