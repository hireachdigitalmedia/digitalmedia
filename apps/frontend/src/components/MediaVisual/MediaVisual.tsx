import type { VisualKey } from '../../data/types';
import { TvGuideMockup } from '../TvGuideMockup';

export interface MediaVisualProps {
  visual: VisualKey;
  /** Compact layout for small cards. */
  compact?: boolean;
}

/** Renders a coded illustration by key, so data files can reference visuals like images. */
export function MediaVisual({ visual, compact }: MediaVisualProps) {
  switch (visual) {
    case 'tv-guide':
      return <TvGuideMockup compact={compact} />;
  }
}
