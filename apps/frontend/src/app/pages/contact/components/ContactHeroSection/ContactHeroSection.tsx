import { Container } from '@mui/material';
import { CONTACT_HERO } from '../../data';
import { Eyebrow, HeroRoot, Subtitle, Title } from './ContactHeroSection.style';

export function ContactHeroSection() {
  const { eyebrow, title, subtitle } = CONTACT_HERO;

  return (
    <HeroRoot>
      <Container maxWidth="lg">
        <Eyebrow>{eyebrow}</Eyebrow>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Container>
    </HeroRoot>
  );
}
