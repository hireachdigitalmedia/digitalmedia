import { IntroCards, Section } from '../../../../../components';
import { OTT_INTRO } from '../../data';

export function OttIntroSection() {
  return (
    <Section glow="right" tone="raised">
      <IntroCards {...OTT_INTRO} />
    </Section>
  );
}
