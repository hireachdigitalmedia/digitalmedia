import type { SvgIconComponent } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { IconTile } from '../IconTile';
import { IconCardHeader, IconCardRoot } from './IconCard.style';

export interface IconCardProps {
  icon: SvgIconComponent;
  title: string;
  description: string;
  /** "inline": icon beside the title. "stacked": icon above the title. */
  layout?: 'inline' | 'stacked';
}

export function IconCard({
  icon,
  title,
  description,
  layout = 'stacked',
}: IconCardProps) {
  return (
    <IconCardRoot>
      <IconCardHeader inline={layout === 'inline'}>
        <IconTile icon={icon} />
        <Typography variant="titleLg" component="h3">
          {title}
        </Typography>
      </IconCardHeader>
      <Typography variant="bodyLg" color="text.secondary">
        {description}
      </Typography>
    </IconCardRoot>
  );
}
