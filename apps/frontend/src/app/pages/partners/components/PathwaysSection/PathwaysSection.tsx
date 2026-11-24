import {
  IconCardGrid,
  Section,
  SectionHeading,
} from '../../../../../components';
import { PATHWAYS_CONTENT } from '../../data';

export function PathwaysSection() {
  const { eyebrow, title, pathways } = PATHWAYS_CONTENT;

  return (
    <Section tone="raised">
      <SectionHeading eyebrow={eyebrow} title={title} />
      <IconCardGrid items={pathways} />
    </Section>
  );
}
