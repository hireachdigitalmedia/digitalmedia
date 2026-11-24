import { Section, SectionHeading } from '../../../../../components';
import { SECTION_IDS } from '../../../../../router/routes';
import { CATEGORIES_CONTENT } from '../../data';
import { CategoryGrid } from './CategoriesSection.style';
import { CategoryTile } from './CategoryTile';

export function CategoriesSection() {
  const { eyebrow, title, categories } = CATEGORIES_CONTENT;

  return (
    <Section id={SECTION_IDS.entertainment}>
      <SectionHeading eyebrow={eyebrow} title={title} />
      <CategoryGrid>
        {categories.map((category) => (
          <CategoryTile key={category.title} {...category} />
        ))}
      </CategoryGrid>
    </Section>
  );
}
