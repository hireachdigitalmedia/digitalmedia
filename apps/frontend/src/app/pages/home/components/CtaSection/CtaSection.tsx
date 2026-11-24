import { Container, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { CTA_CONTENT } from '../../data';
import { CtaButton, CtaRoot } from './CtaSection.style';

export function CtaSection() {
  const { title, subtitle, cta } = CTA_CONTENT;

  return (
    <CtaRoot>
      <Container maxWidth="sm">
        <Typography variant="h4" component="h2" gutterBottom>
          {title}
        </Typography>
        <Typography sx={{ opacity: 0.85 }}>{subtitle}</Typography>
        <CtaButton
          variant="contained"
          size="large"
          component={RouterLink}
          to={cta.to}
        >
          {cta.label}
        </CtaButton>
      </Container>
    </CtaRoot>
  );
}
