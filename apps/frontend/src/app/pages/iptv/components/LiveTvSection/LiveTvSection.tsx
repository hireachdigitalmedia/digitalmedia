import { IconCard, Section, SectionHeading } from '../../../../../components';
import { LIVE_TV_CONTENT } from '../../data';
import { CardPair, LiveTvGrid } from './LiveTvSection.style';

export function LiveTvSection() {
  const { eyebrow, title, subtitle, highlights } = LIVE_TV_CONTENT;

  return (
    <Section tone="raised">
      <LiveTvGrid>
        <div>
          <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
        </div>
        <CardPair>
          {highlights.map((item) => (
            <IconCard key={item.title} {...item} />
          ))}
        </CardPair>
      </LiveTvGrid>
    </Section>
  );
}
