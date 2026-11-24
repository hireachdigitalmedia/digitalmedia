import { alpha, styled } from '@mui/material/styles';

export const HeroRoot = styled('section')(({ theme }) => ({
  padding: theme.spacing(14, 0),
  background: `radial-gradient(ellipse 60% 70% at 90% 30%, ${alpha(theme.palette.primary.main, 0.1)} 0%, transparent 70%)`,
  [theme.breakpoints.down('md')]: { padding: theme.spacing(8, 0) },
}));

export const HeroGrid = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'center',
  gap: theme.spacing(6),
  [theme.breakpoints.down('md')]: { gridTemplateColumns: '1fr' },
}));

export const Badge = styled('span')(({ theme }) => ({
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

export const HeroTitle = styled('h1')(({ theme }) => ({
  ...theme.typography.displayLg,
  fontSize: '4.5rem',
  lineHeight: 1.1,
  margin: 0,
  [theme.breakpoints.down('lg')]: { fontSize: '3.5rem' },
  [theme.breakpoints.down('sm')]: { fontSize: '2.75rem' },
  '& span': { display: 'block' },
}));

export const HeroSubtitle = styled('p')(({ theme }) => ({
  ...theme.typography.bodyLg,
  fontSize: '1.25rem',
  lineHeight: 1.6,
  color: theme.palette.text.secondary,
  maxWidth: 560,
  margin: theme.spacing(3.5, 0, 5),
  [theme.breakpoints.down('sm')]: { fontSize: '1.0625rem' },
}));

export const HeroActions = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(2),
}));

export const HeroImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: 'auto',
  aspectRatio: '16 / 9',
  objectFit: 'cover',
  borderRadius: 24,
  border: `1px solid ${theme.palette.outline.variant}`,
}));
