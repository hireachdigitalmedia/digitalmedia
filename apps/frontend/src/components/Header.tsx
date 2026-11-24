import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from '@mui/material';
import { NavLink, Link as RouterLink } from 'react-router-dom';
import { env } from '../utils/env';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
];

export function Header() {
  return (
    <AppBar
      position="sticky"
      color="inherit"
      elevation={0}
      sx={{ borderBottom: 1, borderColor: 'divider' }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ gap: 2, flexWrap: 'wrap' }}>
          <Typography
            component={RouterLink}
            to="/"
            variant="h6"
            sx={{
              fontWeight: 800,
              color: 'primary.main',
              textDecoration: 'none',
              flexGrow: 1,
            }}
          >
            {env.appName}
          </Typography>
          <Box
            component="nav"
            sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}
          >
            {navItems.map((item) => (
              <Button
                key={item.to}
                component={NavLink}
                to={item.to}
                end={item.to === '/'}
                color="inherit"
                sx={{ '&.active': { color: 'primary.main' } }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
