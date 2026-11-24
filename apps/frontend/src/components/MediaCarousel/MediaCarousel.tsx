import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';
import { IconButton } from '@mui/material';
import type { Ref } from 'react';
import type { MediaItem } from '../../data/types';
import { MediaCard } from '../MediaCard';
import { CARD_WIDTH, CarouselList, Controls } from './MediaCarousel.style';

export interface MediaCarouselProps {
  items: MediaItem[];
  ref?: Ref<HTMLUListElement>;
  cardWidth?: number;
  label?: string;
}

/** Horizontally scrolling row of MediaCards (scroll-snap, hidden scrollbar). */
export function MediaCarousel({
  items,
  ref,
  cardWidth = CARD_WIDTH,
  label,
}: MediaCarouselProps) {
  return (
    <CarouselList ref={ref} cardWidth={cardWidth} aria-label={label}>
      {items.map((item) => (
        <li key={item.title}>
          <MediaCard {...item} />
        </li>
      ))}
    </CarouselList>
  );
}

export interface CarouselControlsProps {
  onPrev: () => void;
  onNext: () => void;
}

/** Previous / next arrow buttons for a MediaCarousel (place them in the section header). */
export function CarouselControls({ onPrev, onNext }: CarouselControlsProps) {
  return (
    <Controls>
      <IconButton aria-label="Previous" onClick={onPrev}>
        <ChevronLeft />
      </IconButton>
      <IconButton aria-label="Next" onClick={onNext}>
        <ChevronRight />
      </IconButton>
    </Controls>
  );
}
