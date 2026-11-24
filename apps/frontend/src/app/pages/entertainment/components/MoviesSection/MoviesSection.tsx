import { Typography } from '@mui/material';
import {
  CarouselControls,
  MediaCarousel,
  Section,
  SectionHeading,
  useCarousel,
} from '../../../../../components';
import { CATEGORY_IDS } from '../../../../../router/routes';
import { MOVIES_CONTENT } from '../../data';
import { HeaderEnd, MoviesHeader } from './MoviesSection.style';

const CARD_WIDTH = 440;

export function MoviesSection() {
  const { eyebrow, title, caption, collections } = MOVIES_CONTENT;
  const carousel = useCarousel(CARD_WIDTH);

  return (
    <Section id={CATEGORY_IDS.movies} tone="raised">
      <MoviesHeader>
        <SectionHeading eyebrow={eyebrow} title={title} disableGutter />
        <HeaderEnd>
          <Typography variant="bodyLg" color="text.secondary">
            {caption}
          </Typography>
          <CarouselControls onPrev={carousel.prev} onNext={carousel.next} />
        </HeaderEnd>
      </MoviesHeader>
      <MediaCarousel
        ref={carousel.ref}
        items={collections}
        cardWidth={CARD_WIDTH}
        label="Movie collections"
      />
    </Section>
  );
}
