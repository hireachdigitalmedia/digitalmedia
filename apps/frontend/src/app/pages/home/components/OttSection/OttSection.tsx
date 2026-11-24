import {
  ActionButton,
  CAROUSEL_CARD_WIDTH,
  CarouselControls,
  MediaCarousel,
  Section,
  SectionHeading,
  useCarousel,
} from '../../../../../components';
import { SECTION_IDS } from '../../../../../router/routes';
import { OTT_CONTENT } from '../../data';
import { HeaderActions, OttHeader } from './OttSection.style';

export function OttSection() {
  const { eyebrow, title, subtitle, cta, platforms } = OTT_CONTENT;
  const carousel = useCarousel(CAROUSEL_CARD_WIDTH);

  return (
    <Section id={SECTION_IDS.ott} tone="raised">
      <OttHeader>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
          disableGutter
        />
        <HeaderActions>
          <CarouselControls onPrev={carousel.prev} onNext={carousel.next} />
          <ActionButton action={cta} variant="outlined" size="medium" arrow />
        </HeaderActions>
      </OttHeader>
      <MediaCarousel
        ref={carousel.ref}
        items={platforms}
        label="OTT platforms"
      />
    </Section>
  );
}
