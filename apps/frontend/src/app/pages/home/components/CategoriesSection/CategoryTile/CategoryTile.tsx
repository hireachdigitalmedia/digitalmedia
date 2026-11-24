import ArrowForward from '@mui/icons-material/ArrowForward';
import type { Category } from '../../../data';
import { TileFooter, TileImage, TileLink } from './CategoryTile.style';

export function CategoryTile({ title, image, to }: Category) {
  return (
    <TileLink to={to}>
      <TileImage src={image} alt="" width={900} height={640} loading="lazy" />
      <TileFooter>
        {title}
        <ArrowForward className="tile-arrow" aria-hidden />
      </TileFooter>
    </TileLink>
  );
}
