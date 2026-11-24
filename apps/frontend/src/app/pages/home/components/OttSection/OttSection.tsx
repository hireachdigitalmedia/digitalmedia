import ArrowForward from '@mui/icons-material/ArrowForward';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';
import { Button, IconButton } from '@mui/material';
import { useRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { MediaCard, Section, SectionHeading } from '../../../../../components';
import { SECTION_IDS } from '../../../../../router/routes';
import { OTT_CONTENT } from '../../data';
import { getCarouselStep } from '../../utils';
import {
  CARD_GAP,
  CARD_WIDTH,
  Carousel,
  HeaderActions,
  OttHeader,
} from './OttSection.style';

export function OttSection() {
  const { eyebrow, title, subtitle, cta, platforms } = OTT_CONTENT;
  const carouselRef = useRef<HTMLUListElement>(null);

  const scroll = (direction: 1 | -1) => {
    const el = carouselRef.current;
    if (!el) return;
    el.scrollBy({
      left: direction * getCarouselStep(el.clientWidth, CARD_WIDTH, CARD_GAP),
      behavior: 'smooth',
    });
  };

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
          <IconButton aria-label="Previous" onClick={() => scroll(-1)}>
            <ChevronLeft />
          </IconButton>
          <IconButton aria-label="Next" onClick={() => scroll(1)}>
            <ChevronRight />
          </IconButton>
          <Button
            variant="outlined"
            endIcon={<ArrowForward />}
            component={RouterLink}
            to={cta.to}
          >
            {cta.label}
          </Button>
        </HeaderActions>
      </OttHeader>
      <Carousel ref={carouselRef}>
        {platforms.map((platform) => (
          <li key={platform.title}>
            <MediaCard {...platform} />
          </li>
        ))}
      </Carousel>
    </Section>
  );
}
