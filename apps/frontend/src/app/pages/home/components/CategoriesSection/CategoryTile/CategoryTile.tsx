import ArrowForward from '@mui/icons-material/ArrowForward';
import { MediaVisual } from '../../../../../../components';
import type { Category } from '../../../data';
import {
  TileFooter,
  TileImage,
  TileLink,
  TileVisual,
} from './CategoryTile.style';

export function CategoryTile({ title, image, visual, to }: Category) {
  return (
    <TileLink to={to}>
      {visual ? (
        <TileVisual>
          <MediaVisual visual={visual} compact />
        </TileVisual>
      ) : (
        <TileImage src={image} alt="" width={900} height={640} loading="lazy" />
      )}
      <TileFooter>
        {title}
        <ArrowForward className="tile-arrow" aria-hidden />
      </TileFooter>
    </TileLink>
  );
}
