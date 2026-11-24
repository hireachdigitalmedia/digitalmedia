import { styled } from '@mui/material/styles';
import { CAPABILITY_COLUMNS } from '../../utils';

export const CapabilityGrid = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: `repeat(${CAPABILITY_COLUMNS}, 1fr)`,
  gap: theme.spacing(3),
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
    // the computed spans only apply to the 3-column layout
    '& > *': { gridColumn: 'auto !important' },
  },
  [theme.breakpoints.down('sm')]: { gridTemplateColumns: '1fr' },
}));
