import { Card } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StepGrid = styled('ol', {
  shouldForwardProp: (prop) => prop !== 'columns',
})<{ columns: number }>(({ theme, columns }) => ({
  listStyle: 'none',
  margin: 0,
  padding: 0,
  display: 'grid',
  gridTemplateColumns: `repeat(${columns}, 1fr)`,
  gap: theme.spacing(3),
  [theme.breakpoints.down('md')]: { gridTemplateColumns: 'repeat(2, 1fr)' },
  [theme.breakpoints.down('sm')]: { gridTemplateColumns: '1fr' },
}));

export const StepCard = styled(Card)(({ theme }) => ({
  height: '100%',
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: theme.spacing(2.5),
}));
