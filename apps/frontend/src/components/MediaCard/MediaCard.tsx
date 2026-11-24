import { Typography } from '@mui/material';
import type { MediaItem } from '../../data/types';
import {
  CardBody,
  CardImage,
  ImageWrapper,
  MediaCardRoot,
} from './MediaCard.style';

/** Card with a 16:9 image on top and a title + description below. */
export function MediaCard({ title, description, image }: MediaItem) {
  return (
    <MediaCardRoot>
      <ImageWrapper>
        <CardImage src={image} alt="" width={900} height={640} loading="lazy" />
      </ImageWrapper>
      <CardBody>
        <Typography variant="titleLg" component="h3" gutterBottom>
          {title}
        </Typography>
        <Typography variant="bodyLg" color="text.secondary">
          {description}
        </Typography>
      </CardBody>
    </MediaCardRoot>
  );
}
