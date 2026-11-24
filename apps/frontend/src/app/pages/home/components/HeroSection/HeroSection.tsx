import ArrowForward from '@mui/icons-material/ArrowForward';
import { Button, Container } from '@mui/material';
import { HERO_CONTENT } from '../../data';
import { scrollToSection } from '../../utils';
import {
  Badge,
  HeroActions,
  HeroGrid,
  HeroImage,
  HeroRoot,
  HeroSubtitle,
  HeroTitle,
} from './HeroSection.style';

export function HeroSection() {
  const { badge, titleLines, subtitle, primaryCta, secondaryCta, image } =
    HERO_CONTENT;

  return (
    <HeroRoot>
      <Container maxWidth="lg">
        <HeroGrid>
          <div>
            <Badge>{badge}</Badge>
            <HeroTitle>
              {titleLines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </HeroTitle>
            <HeroSubtitle>{subtitle}</HeroSubtitle>
            <HeroActions>
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForward />}
                onClick={() => scrollToSection(primaryCta.sectionId)}
              >
                {primaryCta.label}
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => scrollToSection(secondaryCta.sectionId)}
              >
                {secondaryCta.label}
              </Button>
            </HeroActions>
          </div>
          <HeroImage
            src={image.src}
            alt={image.alt}
            width={1400}
            height={1000}
          />
        </HeroGrid>
      </Container>
    </HeroRoot>
  );
}
