import type { Highlight } from '../../data/types';
import { IconCard } from '../IconCard';
import { SectionHeading } from '../SectionHeading';
import { CardPair, IntroGrid } from './IntroCards.style';

export interface IntroCardsProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  highlights: Highlight[];
}

/** Section intro: heading on the left, feature cards on the right. */
export function IntroCards({
  eyebrow,
  title,
  subtitle,
  highlights,
}: IntroCardsProps) {
  return (
    <IntroGrid>
      <div>
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
      </div>
      <CardPair data-stagger>
        {highlights.map((item) => (
          <IconCard key={item.title} {...item} />
        ))}
      </CardPair>
    </IntroGrid>
  );
}
