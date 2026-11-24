import { styled } from '@mui/material/styles';

export const ContactGrid = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1.25fr',
  alignItems: 'start',
  gap: theme.spacing(6),
  [theme.breakpoints.down('md')]: { gridTemplateColumns: '1fr' },
}));

export const PathwaysTitle = styled('h2')(({ theme }) => ({
  ...theme.typography.headlineSm,
  fontSize: '2rem',
  margin: theme.spacing(0, 0, 3),
}));
