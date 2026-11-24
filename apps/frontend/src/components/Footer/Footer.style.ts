import { Link } from '@mui/material';
import { styled } from '@mui/material/styles';

export const FooterRoot = styled('footer')(({ theme }) => ({
  marginTop: 'auto',
  padding: theme.spacing(5, 0),
  backgroundColor: theme.palette.surface.containerLow,
  borderTop: `1px solid ${theme.palette.outline.variant}`,
}));

export const FooterNav = styled('nav')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: theme.spacing(3),
  marginBottom: theme.spacing(2),
}));

export const FooterLink = styled(Link)(({ theme }) => ({
  ...theme.typography.labelLg,
  color: theme.palette.text.secondary,
  '&:hover': { color: theme.palette.primary.main },
})) as typeof Link;
