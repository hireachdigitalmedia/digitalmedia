import type { PropsWithChildren } from 'react';
import type { ImageAsset } from '../../data/types';
import { SplitGrid, SplitImage } from './MediaSplit.style';

export interface MediaSplitProps extends PropsWithChildren {
  image: ImageAsset;
}

/** Image on the left, content on the right (stacks on small screens). */
export function MediaSplit({ image, children }: MediaSplitProps) {
  return (
    <SplitGrid>
      <SplitImage
        src={image.src}
        alt={image.alt}
        width={1400}
        height={1000}
        loading="lazy"
      />
      <div>{children}</div>
    </SplitGrid>
  );
}
