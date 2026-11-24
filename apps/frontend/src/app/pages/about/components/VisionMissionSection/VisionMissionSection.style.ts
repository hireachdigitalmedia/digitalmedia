import { styled } from '@mui/material/styles';

/** Two equal columns, stacking on small screens (used by both About card rows). */
export const TwoColumnGrid = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: theme.spacing(4),
  [theme.breakpoints.down('md')]: { gridTemplateColumns: '1fr' },
}));
