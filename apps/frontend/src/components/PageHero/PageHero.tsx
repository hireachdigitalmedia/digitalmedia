import { Container } from '@mui/material';
import type { CtaAction, ImageAsset, VisualKey } from '../../data/types';
import { ActionButton } from '../ActionButton';
import { MediaFrame } from '../MediaFrame';
import {
  Badge,
  HeroActions,
  HeroGrid,
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
  /** Photo for the right-hand side… */
  image?: ImageAsset;
  /** …or a coded visual instead. */
  visual?: VisualKey;
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
  visual,
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
          <MediaFrame image={image} visual={visual} glow />
        </HeroGrid>
      </Container>
    </HeroRoot>
  );
}
