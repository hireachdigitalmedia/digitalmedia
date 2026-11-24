import { styled } from '@mui/material/styles';

export const Grid = styled('div', {
  shouldForwardProp: (prop) => prop !== 'columns',
})<{ columns: number }>(({ theme, columns }) => ({
  display: 'grid',
  gridTemplateColumns: `repeat(${columns}, 1fr)`,
  gap: theme.spacing(3),
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
    // the computed spans only apply to the full-width layout
    '& > *': { gridColumn: 'auto !important' },
  },
  [theme.breakpoints.down('sm')]: { gridTemplateColumns: '1fr' },
}));
