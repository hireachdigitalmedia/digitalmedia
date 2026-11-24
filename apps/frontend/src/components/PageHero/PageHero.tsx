import { Container } from '@mui/material';
import type { CtaAction, ImageAsset } from '../../data/types';
import { ActionButton } from '../ActionButton';
import {
  Badge,
  HeroActions,
  HeroGrid,
  HeroImage,
  HeroRoot,
  HeroSubtitle,
  HeroTitle,
  type HeroSize,
} from './PageHero.style';

export interface PageHeroProps {
  badge: string;
  /** A string, or an array to force one line per item. */
  title: string | string[];
  subtitle: string;
  primaryAction?: CtaAction;
  secondaryAction?: CtaAction;
  image: ImageAsset;
  /** "xl" for the home page, "lg" for inner pages. */
  size?: HeroSize;
}

/** Two-column page hero: badge, title, subtitle and actions beside an image. */
export function PageHero({
  badge,
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  image,
  size = 'lg',
}: PageHeroProps) {
  return (
    <HeroRoot>
      <Container maxWidth="lg">
        <HeroGrid>
          <div>
            <Badge>{badge}</Badge>
            <HeroTitle size={size}>
              {Array.isArray(title)
                ? title.map((line) => <span key={line}>{line}</span>)
                : title}
            </HeroTitle>
            <HeroSubtitle>{subtitle}</HeroSubtitle>
            {(primaryAction || secondaryAction) && (
              <HeroActions>
                {primaryAction && <ActionButton action={primaryAction} arrow />}
                {secondaryAction && (
                  <ActionButton action={secondaryAction} variant="outlined" />
                )}
              </HeroActions>
            )}
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
