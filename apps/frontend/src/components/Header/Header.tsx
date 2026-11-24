import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, Container, IconButton } from '@mui/material';
import { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  GET_STARTED,
  NAV_ITEMS,
  ROUTES,
  type NavItem,
} from '../../router/routes';
import { useScrolled } from '../../hooks/useScrolled';
import { BrandLogo } from '../BrandLogo';
import {
  DesktopNav,
  DrawerHeader,
  DrawerNav,
  GetStartedButton,
  HeaderActions,
  HeaderBar,
  HeaderInner,
  MenuButtonWrapper,
  MobileDrawer,
  NavLinkButton,
} from './Header.style';

/** A nav item is active when both its path and its #section (if any) match. */
function useIsActive() {
  const { pathname, hash } = useLocation();
  return (item: NavItem) => {
    const [path, section] = item.to.split('#');
    if (section) return pathname === path && hash === `#${section}`;
    if (path === ROUTES.home) return pathname === ROUTES.home && !hash;
    return pathname === path;
  };
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled();
  const isActive = useIsActive();

  const renderLinks = (onClick?: () => void) =>
    NAV_ITEMS.map((item) => (
      <NavLinkButton
        key={item.label}
        component={RouterLink}
        to={item.to}
        className={isActive(item) ? 'active' : undefined}
        aria-current={isActive(item) ? 'page' : undefined}
        onClick={onClick}
      >
        {item.label}
      </NavLinkButton>
    ));

  return (
    <HeaderBar position="fixed" elevation={0} scrolled={scrolled}>
      <Container maxWidth="xl">
        <HeaderInner className="header-inner">
          <BrandLogo />
          <DesktopNav aria-label="Main">{renderLinks()}</DesktopNav>
          <HeaderActions>
            <GetStartedButton
              variant="contained"
              component={RouterLink}
              to={GET_STARTED.to}
            >
              {GET_STARTED.label}
            </GetStartedButton>
            <MenuButtonWrapper>
              <IconButton
                aria-label="Open menu"
                onClick={() => setMenuOpen(true)}
                sx={{ color: 'text.primary' }}
              >
                <MenuIcon />
              </IconButton>
            </MenuButtonWrapper>
          </HeaderActions>
        </HeaderInner>
      </Container>

      <MobileDrawer
        anchor="right"
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      >
        <DrawerHeader>
          <IconButton
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            <CloseIcon />
          </IconButton>
        </DrawerHeader>
        <DrawerNav aria-label="Main">
          {renderLinks(() => setMenuOpen(false))}
        </DrawerNav>
        <Button
          variant="contained"
          size="large"
          fullWidth
          component={RouterLink}
          to={GET_STARTED.to}
          onClick={() => setMenuOpen(false)}
        >
          {GET_STARTED.label}
        </Button>
      </MobileDrawer>
    </HeaderBar>
  );
}
