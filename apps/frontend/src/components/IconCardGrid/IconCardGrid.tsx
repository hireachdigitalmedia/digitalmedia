import type { Highlight } from '../../data/types';
import { getLastRowSpan } from '../../utils/format';
import { IconCard } from '../IconCard';
import { Grid } from './IconCardGrid.style';

export interface IconCardGridProps {
  items: Highlight[];
  columns?: number;
}

/** Grid of IconCards; the last card stretches to fill an incomplete final row. */
export function IconCardGrid({ items, columns = 3 }: IconCardGridProps) {
  return (
    <Grid data-stagger columns={columns}>
      {items.map((item, index) => (
        <div
          key={item.title}
          style={{
            gridColumn: `span ${getLastRowSpan(index, items.length, columns)}`,
          }}
        >
          <IconCard {...item} />
        </div>
      ))}
    </Grid>
  );
}
