import { Card } from '@mui/material';
import { styled } from '@mui/material/styles';
import { hoverLift } from '../../theme/effects';

export const Grid = styled('ul')(({ theme }) => ({
  listStyle: 'none',
  margin: 0,
  padding: 0,
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gap: theme.spacing(3),
  [theme.breakpoints.down('md')]: { gridTemplateColumns: 'repeat(3, 1fr)' },
  [theme.breakpoints.down('sm')]: { gridTemplateColumns: 'repeat(2, 1fr)' },
}));

export const DeviceCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2.5),
  padding: theme.spacing(4.5, 2),
  textAlign: 'center',
  ...hoverLift(theme),
}));
