import {
  IconCardGrid,
  Section,
  SectionHeading,
} from '../../../../../components';
import { FOCUS_CONTENT } from '../../data';

export function FocusSection() {
  const { eyebrow, title, items } = FOCUS_CONTENT;

  return (
    <Section glow="left">
      <SectionHeading eyebrow={eyebrow} title={title} />
      <IconCardGrid items={items} columns={2} />
    </Section>
  );
}
