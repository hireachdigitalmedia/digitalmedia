import { Container, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { CTA_CONTENT } from '../../data';
import { CtaButton, CtaPanel, CtaRoot } from './CtaSection.style';

export function CtaSection() {
  const { title, subtitle, cta } = CTA_CONTENT;

  return (
    <CtaRoot>
      <Container maxWidth="lg">
        <CtaPanel>
          <Typography variant="headlineLg" component="h2" gutterBottom>
            {title}
          </Typography>
          <Typography variant="bodyLg" color="text.secondary">
            {subtitle}
          </Typography>
          <CtaButton
            variant="contained"
            size="large"
            component={RouterLink}
            to={cta.to}
          >
            {cta.label}
          </CtaButton>
        </CtaPanel>
      </Container>
    </CtaRoot>
  );
}
