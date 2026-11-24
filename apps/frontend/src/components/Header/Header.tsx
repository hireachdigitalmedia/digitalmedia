import { Container, Toolbar } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { NAV_ITEMS, ROUTES } from '../../router/routes';
import { env } from '../../utils/env';
import { HeaderBar, LogoImage, LogoLink, Nav, NavButton } from './Header.style';

export function Header() {
  return (
    <HeaderBar position="sticky" color="inherit" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ gap: 2, flexWrap: 'wrap' }}>
          <LogoLink to={ROUTES.home} aria-label={`${env.appName} home`}>
            <LogoImage
              src="/logo.png"
              alt={env.appName}
              width={457}
              height={160}
            />
          </LogoLink>
          <Nav>
            {NAV_ITEMS.map((item) => (
              <NavButton
                key={item.to}
                component={NavLink}
                to={item.to}
                end={item.to === ROUTES.home}
              >
                {item.label}
              </NavButton>
            ))}
          </Nav>
        </Toolbar>
      </Container>
    </HeaderBar>
  );
}
