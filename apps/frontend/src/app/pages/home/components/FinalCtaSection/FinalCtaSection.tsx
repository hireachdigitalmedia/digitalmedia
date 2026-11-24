import { Button, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Section } from '../../../../../components';
import { CTA_CONTENT } from '../../data';
import { scrollToSection } from '../../utils';
import { CtaActions, CtaContent } from './FinalCtaSection.style';

export function FinalCtaSection() {
  const { title, subtitle, primaryCta, secondaryCta } = CTA_CONTENT;

  return (
    <Section tone="raised">
      <CtaContent>
        <Typography variant="headlineLg" component="h2" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="bodyLg"
          color="text.secondary"
          sx={{ fontSize: '1.125rem' }}
        >
          {subtitle}
        </Typography>
        <CtaActions>
          <Button
            variant="contained"
            size="large"
            onClick={() => scrollToSection(primaryCta.sectionId)}
          >
            {primaryCta.label}
          </Button>
          <Button
            variant="outlined"
            size="large"
            component={RouterLink}
            to={secondaryCta.to}
          >
            {secondaryCta.label}
          </Button>
        </CtaActions>
      </CtaContent>
    </Section>
  );
}
