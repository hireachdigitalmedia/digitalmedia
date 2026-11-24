import { alpha, styled } from '@mui/material/styles';

export const FrameRoot = styled('div', {
  shouldForwardProp: (prop) => prop !== 'glow',
})<{ glow: boolean }>(({ theme, glow }) => ({
  position: 'relative',
  width: '100%',
  aspectRatio: '16 / 9',
  overflow: 'hidden',
  borderRadius: 24,
  border: `1px solid ${theme.palette.outline.variant}`,
  backgroundColor: theme.palette.surface.containerLow,
  isolation: 'isolate',
  ...(glow && {
    boxShadow: `0 40px 100px -30px ${alpha(theme.palette.primary.main, 0.35)}, 0 0 0 1px ${alpha(theme.palette.primary.main, 0.12)}`,
  }),
  '& > img': {
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  // Shared grade: soft bottom fade + inner highlight so every image sits in the same light.
  '&::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    borderRadius: 'inherit',
    pointerEvents: 'none',
    background:
      'linear-gradient(180deg, transparent 55%, rgba(16,16,20,0.45) 100%)',
    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
  },
}));
