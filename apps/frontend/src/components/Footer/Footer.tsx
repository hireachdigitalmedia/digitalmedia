import { Container, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { FOOTER_COLUMNS } from '../../router/routes';
import { BrandLogo } from '../BrandLogo';
import { COMPANY_INFO } from '../../data/company';
import {
  BottomBar,
  BrandColumn,
  ColumnTitle,
  FooterGrid,
  FooterLink,
  FooterRoot,
  LinkList,
} from './Footer.style';

export function Footer() {
  return (
    <FooterRoot>
      <Container maxWidth="lg">
        <FooterGrid>
          <BrandColumn>
            <BrandLogo size="lg" />
            <Typography
              variant="bodyLg"
              color="text.secondary"
              sx={{ maxWidth: 420 }}
            >
              {COMPANY_INFO.tagline}
            </Typography>
            <Typography variant="bodyLg" color="text.secondary" component="div">
              Email:{' '}
              <FooterLink href={`mailto:${COMPANY_INFO.email}`}>
                {COMPANY_INFO.email}
              </FooterLink>
              {COMPANY_INFO.office && <div>Office: {COMPANY_INFO.office}</div>}
            </Typography>
          </BrandColumn>

          {FOOTER_COLUMNS.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <ColumnTitle>{column.title}</ColumnTitle>
              <LinkList>
                {column.links.map((link) => (
                  <li key={link.label}>
                    <FooterLink component={RouterLink} to={link.to}>
                      {link.label}
                    </FooterLink>
                  </li>
                ))}
              </LinkList>
            </nav>
          ))}
        </FooterGrid>

        <BottomBar>
          <Typography variant="bodyMd" color="text.secondary">
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All Rights
            Reserved.
          </Typography>
          <Typography variant="labelLg" color="text.secondary">
            {COMPANY_INFO.affiliation}
          </Typography>
        </BottomBar>
      </Container>
    </FooterRoot>
  );
}
