import { styled } from '@mui/material/styles';

export const PolicyCardRoot = styled('article')(({ theme }) => ({
  padding: theme.spacing(5),
  borderRadius: 16,
  border: `1px solid ${theme.palette.outline.variant}`,
  backgroundColor: theme.palette.surface.container,
  [theme.breakpoints.down('sm')]: { padding: theme.spacing(3) },
}));

export const PolicyTitle = styled('h2')(({ theme }) => ({
  ...theme.typography.headlineSm,
  fontSize: '2rem',
  margin: theme.spacing(0, 0, 2),
}));

export const PolicyStatus = styled('p')(({ theme }) => ({
  ...theme.typography.bodyMd,
  color: theme.palette.primary.main,
  margin: theme.spacing(0, 0, 2.5),
}));

export const PolicyText = styled('p')(({ theme }) => ({
  ...theme.typography.bodyLg,
  fontSize: '1.0625rem',
  lineHeight: 1.7,
  color: theme.palette.text.secondary,
  maxWidth: 720,
  margin: theme.spacing(0, 0, 2),
  '&:last-of-type': { marginBottom: 0 },
}));
