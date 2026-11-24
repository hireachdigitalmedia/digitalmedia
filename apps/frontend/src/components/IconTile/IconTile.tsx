import type { SvgIconComponent } from '@mui/icons-material';
import type { ReactNode } from 'react';
import {
  IconTileRoot,
  type IconTileShape,
  type IconTileSize,
  type IconTileTone,
} from './IconTile.style';

export interface IconTileProps {
  icon?: SvgIconComponent;
  /** Text content instead of an icon (e.g. a step number). */
  children?: ReactNode;
  shape?: IconTileShape;
  size?: IconTileSize;
  tone?: IconTileTone;
}

/** Rounded tile holding an icon — the design's standard icon container. */
export function IconTile({
  icon: Icon,
  children,
  shape = 'square',
  size = 'md',
  tone = 'primary',
}: IconTileProps) {
  return (
    <IconTileRoot shape={shape} size={size} tone={tone} aria-hidden>
      {Icon ? <Icon /> : children}
    </IconTileRoot>
  );
}
