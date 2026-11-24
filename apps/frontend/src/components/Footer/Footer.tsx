import { Container, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { NAV_ITEMS } from '../../router/routes';
import { env } from '../../utils/env';
import { FooterLink, FooterNav, FooterRoot } from './Footer.style';

export function Footer() {
  return (
    <FooterRoot>
      <Container maxWidth="lg">
        <FooterNav>
          {NAV_ITEMS.map((item) => (
            <FooterLink
              key={item.to}
              component={RouterLink}
              to={item.to}
              underline="hover"
            >
              {item.label}
            </FooterLink>
          ))}
        </FooterNav>
        <Typography variant="bodyMd" align="center" color="text.secondary">
          © {new Date().getFullYear()} {env.appName}. All rights reserved.
        </Typography>
      </Container>
    </FooterRoot>
  );
}
