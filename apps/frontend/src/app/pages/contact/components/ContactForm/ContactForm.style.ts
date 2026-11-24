import { Card } from '@mui/material';
import { styled } from '@mui/material/styles';

export const FormCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(5),
  [theme.breakpoints.down('sm')]: { padding: theme.spacing(3) },
}));

export const FormTitle = styled('h2')(({ theme }) => ({
  ...theme.typography.headlineSm,
  margin: theme.spacing(0, 0, 3),
}));

export const FieldGrid = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: theme.spacing(2.5),
  marginBottom: theme.spacing(3),
  '& > .full-width': { gridColumn: '1 / -1' },
  [theme.breakpoints.down('sm')]: { gridTemplateColumns: '1fr' },
}));

export const PartnerNote = styled('p')(({ theme }) => ({
  ...theme.typography.labelLg,
  gridColumn: '1 / -1',
  margin: theme.spacing(1, 0, 0),
  color: theme.palette.primary.main,
}));
