import { alpha, styled } from '@mui/material/styles';

export const IntroRoot = styled('section')(({ theme }) => ({
  padding: theme.spacing(14, 0, 12),
  background: `radial-gradient(ellipse 50% 80% at 85% 20%, ${alpha(theme.palette.primary.main, 0.08)} 0%, transparent 70%)`,
  [theme.breakpoints.down('md')]: { padding: theme.spacing(8, 0) },
}));

export const Eyebrow = styled('span')(({ theme }) => ({
  ...theme.typography.overline,
  fontSize: '0.875rem',
  display: 'block',
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(2),
}));

export const Title = styled('h1')(({ theme }) => ({
  ...theme.typography.displayLg,
  fontSize: '4rem',
  margin: 0,
  [theme.breakpoints.down('sm')]: { fontSize: '2.75rem' },
}));

export const Subtitle = styled('p')(({ theme }) => ({
  ...theme.typography.bodyLg,
  fontSize: '1.25rem',
  lineHeight: 1.6,
  color: theme.palette.text.secondary,
  maxWidth: 760,
  margin: theme.spacing(3, 0, 0),
}));

export const Extra = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(4),
}));
