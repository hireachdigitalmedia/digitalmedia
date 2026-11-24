import { AppBar, Button } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export const HeaderBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.surface.main, 0.85),
  backdropFilter: 'blur(12px)',
  borderBottom: `1px solid ${theme.palette.outline.variant}`,
}));

export const LogoLink = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  flexGrow: 1,
  padding: theme.spacing(1.5, 0),
  color: theme.palette.text.primary,
  textDecoration: 'none',
}));

/** The brand mark is navy + red, so it sits on a light tile to stay legible on dark surfaces. */
export const LogoMark = styled('img')(({ theme }) => ({
  width: 36,
  height: 36,
  borderRadius: 10,
  backgroundColor: '#FFFFFF',
  [theme.breakpoints.down('sm')]: { width: 32, height: 32 },
}));

export const LogoText = styled('span')(({ theme }) => ({
  ...theme.typography.titleLg,
  fontSize: '1.125rem',
  whiteSpace: 'nowrap',
}));

export const Nav = styled('nav')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(0.5),
}));

export const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.secondary,
  '&:hover': {
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.surface.containerHigh,
  },
  '&.active': {
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.surface.container,
  },
})) as typeof Button;
