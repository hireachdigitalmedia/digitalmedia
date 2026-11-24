import { MediaCard, Section } from '../../../../../components';
import { MORE_CATEGORIES } from '../../data';
import { CategoryGrid } from './MoreCategoriesSection.style';

/** Sports, Regional and Family categories, three across. */
export function MoreCategoriesSection() {
  return (
    <Section tone="raised">
      <CategoryGrid data-stagger>
        {MORE_CATEGORIES.map((category) => (
          <MediaCard key={category.title} {...category} />
        ))}
      </CategoryGrid>
    </Section>
  );
}
