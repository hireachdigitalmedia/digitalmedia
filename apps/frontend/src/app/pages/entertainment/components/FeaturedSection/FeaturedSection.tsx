import { MediaCard, Section } from '../../../../../components';
import { FEATURED_CATEGORIES } from '../../data';
import { FeaturedGrid } from './FeaturedSection.style';

/** Two large category cards (Web Series, Live TV). */
export function FeaturedSection() {
  return (
    <Section>
      <FeaturedGrid data-stagger>
        {FEATURED_CATEGORIES.map((category) => (
          <MediaCard key={category.title} size="lg" {...category} />
        ))}
      </FeaturedGrid>
    </Section>
  );
}
