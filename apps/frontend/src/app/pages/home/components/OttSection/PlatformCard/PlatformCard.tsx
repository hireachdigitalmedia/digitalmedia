import { Typography } from '@mui/material';
import type { Platform } from '../../../data';
import {
  PlatformBody,
  PlatformCardRoot,
  PlatformImage,
  PlatformImageWrapper,
} from './PlatformCard.style';

export function PlatformCard({ title, description, image }: Platform) {
  return (
    <PlatformCardRoot>
      <PlatformImageWrapper>
        <PlatformImage
          src={image}
          alt=""
          width={900}
          height={640}
          loading="lazy"
        />
      </PlatformImageWrapper>
      <PlatformBody>
        <Typography variant="titleLg" component="h3" gutterBottom>
          {title}
        </Typography>
        <Typography variant="bodyLg" color="text.secondary">
          {description}
        </Typography>
      </PlatformBody>
    </PlatformCardRoot>
  );
}
