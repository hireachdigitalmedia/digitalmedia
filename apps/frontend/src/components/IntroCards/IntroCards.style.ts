import { styled } from '@mui/material/styles';

export const IntroGrid = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1.15fr',
  alignItems: 'start',
  gap: theme.spacing(6),
  '& > :first-of-type > *': { marginBottom: 0 },
  [theme.breakpoints.down('md')]: { gridTemplateColumns: '1fr' },
}));

export const CardPair = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: theme.spacing(3),
  [theme.breakpoints.down('sm')]: { gridTemplateColumns: '1fr' },
}));
