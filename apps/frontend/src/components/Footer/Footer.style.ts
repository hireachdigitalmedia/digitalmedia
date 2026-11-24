import { Link } from '@mui/material';
import { styled } from '@mui/material/styles';

export const FooterRoot = styled('footer')(({ theme }) => ({
  marginTop: 'auto',
  padding: theme.spacing(5, 0),
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
}));

export const FooterNav = styled('nav')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: theme.spacing(3),
  marginBottom: theme.spacing(2),
}));

export const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  opacity: 0.85,
  '&:hover': { opacity: 1 },
})) as typeof Link;
