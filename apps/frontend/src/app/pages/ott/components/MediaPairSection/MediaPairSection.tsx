import {
  MediaCard,
  Section,
  SectionHeading,
  type SectionProps,
} from '../../../../../components';
import type { MediaPairContent } from '../../data';
import { PairGrid } from './MediaPairSection.style';

export interface MediaPairSectionProps {
  content: MediaPairContent;
  id?: string;
  tone?: SectionProps['tone'];
}

/** Heading plus two side-by-side image cards (Movies/Web Series, Sports/Live). */
export function MediaPairSection({ content, id, tone }: MediaPairSectionProps) {
  const { eyebrow, title, subtitle, items } = content;

  return (
    <Section id={id} tone={tone}>
      <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <PairGrid data-stagger>
        {items.map((item) => (
          <MediaCard key={item.title} {...item} />
        ))}
      </PairGrid>
    </Section>
  );
}
