import { IntroCards, Section } from '../../../../../components';
import { OTT_INTRO } from '../../data';

export function OttIntroSection() {
  return (
    <Section tone="raised">
      <IntroCards {...OTT_INTRO} />
    </Section>
  );
}
