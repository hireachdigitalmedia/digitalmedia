import { styled } from '@mui/material/styles';

export const FeaturedGrid = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: theme.spacing(4),
  [theme.breakpoints.down('md')]: { gridTemplateColumns: '1fr' },
}));
