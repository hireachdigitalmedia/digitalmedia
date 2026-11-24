import type { PropsWithChildren } from 'react';
import type { ImageAsset, VisualKey } from '../../data/types';
import { MediaFrame } from '../MediaFrame';
import { SplitGrid } from './MediaSplit.style';

export interface MediaSplitProps extends PropsWithChildren {
  image?: ImageAsset;
  /** Coded visual instead of a photo. */
  visual?: VisualKey;
}

/** Image (or coded visual) on the left, content on the right; stacks on small screens. */
export function MediaSplit({ image, visual, children }: MediaSplitProps) {
  return (
    <SplitGrid>
      <MediaFrame image={image} visual={visual} lazy />
      <div>{children}</div>
    </SplitGrid>
  );
}
