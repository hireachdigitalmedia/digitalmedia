import { Button, Container, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { HERO_CONTENT } from '../../data';
import { HeroActions, HeroContent, HeroRoot } from './HeroSection.style';

export function HeroSection() {
  const { title, subtitle, primaryCta, secondaryCta } = HERO_CONTENT;

  return (
    <HeroRoot>
      <Container maxWidth="md">
        <HeroContent spacing={3}>
          <Typography variant="displayLg" component="h1">
            {title}
          </Typography>
          <Typography
            variant="bodyLg"
            color="text.secondary"
            sx={{ fontSize: '1.125rem', maxWidth: 560 }}
          >
            {subtitle}
          </Typography>
          <HeroActions>
            <Button
              variant="contained"
              size="large"
              component={RouterLink}
              to={primaryCta.to}
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
          </HeroActions>
        </HeroContent>
      </Container>
    </HeroRoot>
  );
}
