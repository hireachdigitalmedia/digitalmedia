import { styled } from '@mui/material/styles';

export const FieldLabel = styled('label')(({ theme }) => ({
  ...theme.typography.labelLg,
  display: 'block',
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1),
}));
