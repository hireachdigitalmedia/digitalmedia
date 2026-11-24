import { AppBar, Button, Drawer } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import { EASE_OUT } from '../../theme/effects';

const NAV_BREAKPOINT = 1200;

/** Full header height; the layout reserves this space so compacting never shifts content. */
export const HEADER_HEIGHT = 80;
const HEADER_HEIGHT_COMPACT = 64;

export const HeaderBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'scrolled',
})<{ scrolled: boolean }>(({ theme, scrolled }) => ({
  backgroundColor: alpha(theme.palette.surface.main, scrolled ? 0.96 : 0.75),
  backdropFilter: 'blur(14px)',
  borderBottom: `1px solid ${scrolled ? theme.palette.outline.variant : 'transparent'}`,
  boxShadow: scrolled ? '0 10px 30px -12px rgba(0,0,0,0.6)' : 'none',
  transition:
    'background-color 300ms ease, border-color 300ms ease, box-shadow 300ms ease',
  // Compact header once scrolled: shorter bar, smaller logo.
  '& .header-inner': {
    minHeight: scrolled ? HEADER_HEIGHT_COMPACT : HEADER_HEIGHT,
    transition: `min-height 300ms ${EASE_OUT}`,
  },
  '& .brand-logo': {
    transform: scrolled ? 'scale(0.86)' : 'none',
    transformOrigin: 'left center',
    transition: `transform 300ms ${EASE_OUT}`,
  },
}));

export const HeaderInner = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(3),
  minHeight: HEADER_HEIGHT,
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
  position: 'relative',
  // Underline that grows from the centre on hover / for the active page.
  '&::after': {
    content: '""',
    position: 'absolute',
    left: 8,
    right: 8,
    bottom: 2,
    height: 2,
    borderRadius: 2,
    backgroundColor: theme.palette.primary.main,
    transform: 'scaleX(0)',
    transition: `transform 250ms ${EASE_OUT}`,
  },
  '&:hover': {
    color: theme.palette.text.primary,
    backgroundColor: 'transparent',
    '&::after': { transform: 'scaleX(0.6)' },
  },
  '&.active': {
    color: theme.palette.primary.main,
    '&::after': { transform: 'scaleX(1)' },
  },
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
