import { styled } from '@mui/material/styles';

export const PairGrid = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: theme.spacing(3),
  [theme.breakpoints.down('sm')]: { gridTemplateColumns: '1fr' },
}));
