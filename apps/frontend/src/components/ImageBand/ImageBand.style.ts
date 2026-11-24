import { alpha, styled } from '@mui/material/styles';

export const BandRoot = styled('section')(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  padding: theme.spacing(16, 0),
  isolation: 'isolate',
  [theme.breakpoints.down('md')]: { padding: theme.spacing(10, 0) },
}));

/** Full-bleed background photo; softened because it is stretched wider than its source. */
export const BandImage = styled('img')({
  position: 'absolute',
  inset: '-12px',
  width: 'calc(100% + 24px)',
  height: 'calc(100% + 24px)',
  objectFit: 'cover',
  filter: 'blur(3px) saturate(1.05)',
  zIndex: -2,
});

export const BandOverlay = styled('div')(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  zIndex: -1,
  background: `linear-gradient(90deg, ${alpha(theme.palette.surface.main, 0.95)} 0%, ${alpha(theme.palette.surface.main, 0.78)} 45%, ${alpha(theme.palette.surface.main, 0.35)} 100%),
    linear-gradient(180deg, ${theme.palette.surface.main} 0%, transparent 18%, transparent 82%, ${theme.palette.surface.main} 100%)`,
}));

export const BandContent = styled('div')({
  maxWidth: 680,
});

export const BandTitle = styled('h2')(({ theme }) => ({
  ...theme.typography.displayMd,
  margin: 0,
  '& em': { fontStyle: 'normal', color: theme.palette.primary.main },
}));

export const BandText = styled('p')(({ theme }) => ({
  ...theme.typography.bodyLg,
  fontSize: '1.125rem',
  lineHeight: 1.6,
  color: theme.palette.text.secondary,
  margin: theme.spacing(2.5, 0, 0),
}));

export const BandActions = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(4),
}));
