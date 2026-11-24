import { PageHero } from '../../../../../components';
import { HERO_CONTENT } from '../../data';

export function HeroSection() {
  const { badge, titleLines, subtitle, primaryCta, secondaryCta, image } =
    HERO_CONTENT;

  return (
    <PageHero
      size="xl"
      badge={badge}
      title={titleLines}
      subtitle={subtitle}
      primaryAction={primaryCta}
      secondaryAction={secondaryCta}
      image={image}
    />
  );
}
