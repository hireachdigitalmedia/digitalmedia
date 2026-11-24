import { IntroCards, Section } from '../../../../../components';
import { LIVE_TV_CONTENT } from '../../data';

export function LiveTvSection() {
  return (
    <Section tone="raised">
      <IntroCards {...LIVE_TV_CONTENT} />
    </Section>
  );
}
