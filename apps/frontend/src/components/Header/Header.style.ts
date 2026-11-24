import { AppBar, Button, Drawer } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';

const NAV_BREAKPOINT = 1200;

export const HeaderBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.surface.main, 0.9),
  backdropFilter: 'blur(12px)',
  borderBottom: `1px solid ${theme.palette.outline.variant}`,
}));

export const HeaderInner = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(3),
  minHeight: 80,
}));

export const DesktopNav = styled('nav')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.5),
  marginLeft: 'auto',
  // 7 links need ~1200px; below that the drawer menu takes over.
  [theme.breakpoints.down(NAV_BREAKPOINT)]: { display: 'none' },
}));

export const NavLinkButton = styled(Button)(({ theme }) => ({
  ...theme.typography.labelLg,
  fontSize: '0.9375rem',
  padding: theme.spacing(1, 1),
  color: theme.palette.text.secondary,
  whiteSpace: 'nowrap',
  '&:hover': {
    color: theme.palette.text.primary,
    backgroundColor: 'transparent',
  },
  '&.active': { color: theme.palette.primary.main },
})) as typeof Button;

export const HeaderActions = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  marginLeft: 'auto',
  [theme.breakpoints.up(NAV_BREAKPOINT)]: { marginLeft: theme.spacing(1) },
}));

export const GetStartedButton = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: { display: 'none' },
})) as typeof Button;

export const MenuButtonWrapper = styled('span')(({ theme }) => ({
  [theme.breakpoints.up(NAV_BREAKPOINT)]: { display: 'none' },
}));

export const MobileDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: 'min(320px, 85vw)',
    padding: theme.spacing(2, 2, 3),
    backgroundColor: theme.palette.surface.containerLow,
    borderLeft: `1px solid ${theme.palette.outline.variant}`,
  },
}));

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  marginBottom: theme.spacing(1),
}));

export const DrawerNav = styled('nav')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(0.5),
  marginBottom: theme.spacing(3),
  '& .MuiButton-root': {
    justifyContent: 'flex-start',
    padding: theme.spacing(1.5, 2),
  },
}));
