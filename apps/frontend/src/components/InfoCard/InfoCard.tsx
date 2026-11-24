import { Typography } from '@mui/material';
import type { InfoItem } from '../../data/types';
import {
  CardTitle,
  CardTop,
  InfoCardRoot,
  type InfoCardVariant,
} from './InfoCard.style';

export interface InfoCardProps extends InfoItem {
  /** "brand": uppercase title for brand names (Hi Reach Broadband, …). */
  variant?: InfoCardVariant;
}

/** Text card with a coloured label, title and description (vision/mission, brands). */
export function InfoCard({
  eyebrow,
  title,
  description,
  icon: Icon,
  accent = 'primary',
  highlighted = false,
  variant = 'default',
}: InfoCardProps) {
  return (
    <InfoCardRoot highlighted={highlighted}>
      <CardTop accent={accent}>
        {eyebrow}
        {Icon && <Icon aria-hidden />}
      </CardTop>
      <CardTitle variant={variant}>{title}</CardTitle>
      <Typography
        variant="bodyLg"
        color="text.secondary"
        sx={{ fontSize: '1.0625rem' }}
      >
        {description}
      </Typography>
    </InfoCardRoot>
  );
}
