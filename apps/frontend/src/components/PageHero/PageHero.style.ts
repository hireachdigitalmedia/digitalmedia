import { alpha, styled } from '@mui/material/styles';
import { enter, fadeScale } from '../../theme/effects';

export type HeroSize = 'xl' | 'lg';

export const HeroRoot = styled('section')(({ theme }) => ({
  position: 'relative',
  isolation: 'isolate',
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    zIndex: -1,
    pointerEvents: 'none',
    backgroundImage: `radial-gradient(${alpha(theme.palette.common.white, 0.07)} 1px, transparent 1px)`,
    backgroundSize: '28px 28px',
    maskImage:
      'radial-gradient(ellipse 70% 80% at 70% 40%, #000 0%, transparent 75%)',
    WebkitMaskImage:
      'radial-gradient(ellipse 70% 80% at 70% 40%, #000 0%, transparent 75%)',
  },
  padding: theme.spacing(14, 0),
  background: `radial-gradient(ellipse 60% 70% at 90% 30%, ${alpha(theme.palette.primary.main, 0.1)} 0%, transparent 70%)`,
  [theme.breakpoints.down('md')]: { padding: theme.spacing(8, 0) },
}));

export const HeroGrid = styled('div')(({ theme }) => ({
  '& > :last-child': enter(250, fadeScale),
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'center',
  gap: theme.spacing(6),
  [theme.breakpoints.down('md')]: { gridTemplateColumns: '1fr' },
}));

export const Badge = styled('span')(({ theme }) => ({
  ...enter(0),
  ...theme.typography.labelLg,
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(1.25),
  padding: theme.spacing(0.75, 2),
  borderRadius: 999,
  border: `1px solid ${theme.palette.outline.variant}`,
  backgroundColor: theme.palette.surface.containerLow,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(3.5),
  '&::before': {
    content: '""',
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: theme.palette.primary.main,
  },
}));

export const HeroTitle = styled('h1', {
  shouldForwardProp: (prop) => prop !== 'size',
})<{ size: HeroSize }>(({ theme, size }) => ({
  ...enter(100),
  ...theme.typography.displayLg,
  fontSize: size === 'xl' ? '4.5rem' : '3.5rem',
  lineHeight: 1.1,
  margin: 0,
  [theme.breakpoints.down('lg')]: {
    fontSize: size === 'xl' ? '3.5rem' : '3rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: size === 'xl' ? '2.75rem' : '2.375rem',
  },
  '& span': { display: 'block' },
}));

export const HeroSubtitle = styled('p')(({ theme }) => ({
  ...enter(220),
  ...theme.typography.bodyLg,
  fontSize: '1.25rem',
  lineHeight: 1.6,
  color: theme.palette.text.secondary,
  maxWidth: 580,
  margin: theme.spacing(3.5, 0, 5),
  [theme.breakpoints.down('sm')]: { fontSize: '1.0625rem' },
}));

export const HeroActions = styled('div')(({ theme }) => ({
  ...enter(320),
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(2),
}));
