import { styled } from '@mui/material/styles';

export type IconTileShape = 'square' | 'circle';
export type IconTileTone = 'primary' | 'tertiary' | 'solid';

const SIZES = { sm: 40, md: 48, lg: 56 } as const;
export type IconTileSize = keyof typeof SIZES;

export const IconTileRoot = styled('span', {
  shouldForwardProp: (prop) =>
    !['shape', 'size', 'tone'].includes(prop as string),
})<{ shape: IconTileShape; size: IconTileSize; tone: IconTileTone }>(
  ({ theme, shape, size, tone }) => ({
    display: 'inline-flex',
    flexShrink: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: SIZES[size],
    height: SIZES[size],
    borderRadius: shape === 'circle' ? '50%' : 12,
    backgroundColor:
      tone === 'solid'
        ? theme.palette.primary.main
        : theme.palette.surface.containerHigh,
    color:
      tone === 'solid'
        ? theme.palette.primary.contrastText
        : tone === 'tertiary'
          ? theme.palette.tertiary.main
          : theme.palette.primary.main,
    '& .MuiSvgIcon-root': { fontSize: SIZES[size] * 0.5 },
  }),
);
