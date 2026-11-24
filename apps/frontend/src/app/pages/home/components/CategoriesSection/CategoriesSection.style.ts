import { styled } from '@mui/material/styles';

export const CategoryGrid = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: theme.spacing(3),
  [theme.breakpoints.down('md')]: { gridTemplateColumns: 'repeat(2, 1fr)' },
  [theme.breakpoints.down('sm')]: { gridTemplateColumns: '1fr' },
}));
