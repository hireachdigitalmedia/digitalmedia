import { Card } from '@mui/material';
import { styled } from '@mui/material/styles';

export const FormCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(4),
  [theme.breakpoints.down('sm')]: { padding: theme.spacing(3) },
}));

export const FieldGrid = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: theme.spacing(2.5, 2.5),
  marginBottom: theme.spacing(3),
  [theme.breakpoints.down('sm')]: { gridTemplateColumns: '1fr' },
}));

export const FieldLabel = styled('label')(({ theme }) => ({
  ...theme.typography.labelLg,
  display: 'block',
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1),
}));
