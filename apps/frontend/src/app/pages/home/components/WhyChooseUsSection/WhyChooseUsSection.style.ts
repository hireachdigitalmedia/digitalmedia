import { styled } from '@mui/material/styles';

export const ReasonGrid = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: theme.spacing(3),
  [theme.breakpoints.down('md')]: { gridTemplateColumns: '1fr' },
}));
