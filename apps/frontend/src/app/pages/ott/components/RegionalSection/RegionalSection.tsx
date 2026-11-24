import { MediaSplit, Section, SectionHeading } from '../../../../../components';
import { REGIONAL_CONTENT } from '../../data';

export function RegionalSection() {
  const { eyebrow, title, subtitle, image } = REGIONAL_CONTENT;

  return (
    <Section tone="raised">
      <MediaSplit image={image} reverse>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
          disableGutter
        />
      </MediaSplit>
    </Section>
  );
}
