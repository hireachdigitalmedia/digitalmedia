import {
  CheckList,
  MediaSplit,
  Section,
  SectionHeading,
} from '../../../../../components';
import { RESIDENTIAL_CONTENT } from '../../data';

export function ResidentialSection() {
  const { eyebrow, title, subtitle, points, image } = RESIDENTIAL_CONTENT;

  return (
    <Section tone="raised">
      <MediaSplit image={image}>
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
        <CheckList items={points} />
      </MediaSplit>
    </Section>
  );
}
