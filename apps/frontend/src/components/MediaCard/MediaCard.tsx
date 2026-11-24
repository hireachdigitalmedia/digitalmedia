import { Typography } from '@mui/material';
import type { MediaItem } from '../../data/types';
import { MediaVisual } from '../MediaVisual';
import {
  CardBody,
  CardEyebrow,
  CardImage,
  ImageWrapper,
  MediaCardRoot,
  type MediaCardSize,
} from './MediaCard.style';

export interface MediaCardProps extends MediaItem {
  /** "lg" for featured cards with bigger type. */
  size?: MediaCardSize;
}

/** Card with a 16:9 image on top and an (optional eyebrow,) title and description below. */
export function MediaCard({
  title,
  description,
  image,
  visual,
  eyebrow,
  id,
  size = 'md',
}: MediaCardProps) {
  return (
    <MediaCardRoot id={id}>
      <ImageWrapper>
        {visual ? (
          <MediaVisual visual={visual} compact />
        ) : (
          <CardImage
            src={image}
            alt=""
            width={900}
            height={640}
            loading="lazy"
          />
        )}
      </ImageWrapper>
      <CardBody size={size}>
        {eyebrow && <CardEyebrow>{eyebrow}</CardEyebrow>}
        <Typography
          variant={size === 'lg' ? 'headlineSm' : 'titleLg'}
          component="h3"
          gutterBottom
        >
          {title}
        </Typography>
        <Typography
          variant="bodyLg"
          color="text.secondary"
          sx={size === 'lg' ? { fontSize: '1.125rem' } : undefined}
        >
          {description}
        </Typography>
      </CardBody>
    </MediaCardRoot>
  );
}
