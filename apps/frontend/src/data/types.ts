import type { SvgIconComponent } from '@mui/icons-material';

/** Content shapes shared by several pages. */

export interface ImageAsset {
  src: string;
  alt: string;
}

/** A button target: a route (`to`) or a section on the current page (`sectionId`). */
export interface CtaAction {
  label: string;
  to?: string;
  sectionId?: string;
}

/** Icon + short label (feature tiles, devices, flow steps). */
export interface IconLabel {
  icon: SvgIconComponent;
  label: string;
}

/** Icon + title + description (feature cards). */
export interface Highlight {
  icon: SvgIconComponent;
  title: string;
  description: string;
}

export interface Step {
  title: string;
  description: string;
}

export interface Faq {
  question: string;
  answer: string;
}

/** Image card content (image on top, title + description below). */
export interface MediaItem {
  title: string;
  description: string;
  image: string;
}
