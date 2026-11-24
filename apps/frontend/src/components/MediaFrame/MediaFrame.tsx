import type { ImageAsset, VisualKey } from '../../data/types';
import { MediaVisual } from '../MediaVisual';
import { FrameRoot } from './MediaFrame.style';

export interface MediaFrameProps {
  image?: ImageAsset;
  visual?: VisualKey;
  /** Orange ambient glow (heroes). */
  glow?: boolean;
  /** Lazy-load the image (below the fold). */
  lazy?: boolean;
}

/** 16:9 rounded frame for a photo or coded visual, with the site-wide image grade on top. */
export function MediaFrame({
  image,
  visual,
  glow = false,
  lazy = false,
}: MediaFrameProps) {
  return (
    <FrameRoot glow={glow}>
      {visual ? (
        <MediaVisual visual={visual} />
      ) : image ? (
        <img
          src={image.src}
          alt={image.alt}
          width={1400}
          height={788}
          loading={lazy ? 'lazy' : undefined}
        />
      ) : null}
    </FrameRoot>
  );
}
