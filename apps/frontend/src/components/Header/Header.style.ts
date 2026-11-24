import { AppBar, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export const HeaderBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

export const LogoLink = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexGrow: 1,
  padding: theme.spacing(1, 0),
}));

export const LogoImage = styled('img')(({ theme }) => ({
  height: 48,
  width: 'auto',
  [theme.breakpoints.down('md')]: { height: 40 },
}));

export const Nav = styled('nav')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(0.5),
}));

export const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  '&.active': { color: theme.palette.primary.main },
})) as typeof Button;
