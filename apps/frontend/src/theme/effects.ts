import { alpha, keyframes, type Theme } from '@mui/material/styles';
import type { CSSObject } from '@mui/material/styles';

/** Easing used for all entrance and hover motion. */
export const EASE_OUT = 'cubic-bezier(0.2, 0.7, 0.2, 1)';

/** Only animate when the user hasn't asked for reduced motion. */
export const MOTION_OK = '@media (prefers-reduced-motion: no-preference)';

/** Delay step between staggered items. */
export const STAGGER_MS = 80;
const MAX_STAGGERED = 12;

export const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: none; }
`;

export const fadeScale = keyframes`
  from { opacity: 0; transform: scale(0.96); }
  to { opacity: 1; transform: none; }
`;

/** Entrance animation (on mount) with an optional delay in ms. */
export const enter = (delayMs = 0, animation = fadeUp): CSSObject => ({
  [MOTION_OK]: {
    animation: `${animation} 800ms ${EASE_OUT} ${delayMs}ms both`,
  },
});

/**
 * The reveal animates `opacity` + `translate` (not `transform`), so it never fights with
 * hover effects that use `transform`. Hover-related properties are listed too, with no delay.
 */
const REVEAL_TRANSITION = [
  `opacity 700ms ${EASE_OUT}`,
  `translate 700ms ${EASE_OUT}`,
  `transform 300ms ${EASE_OUT}`,
  'border-color 250ms ease',
  'box-shadow 300ms ease',
].join(', ');

/** Delay only the reveal properties of child n, so they appear one after another. */
const staggerDelays = (baseMs: number): CSSObject =>
  Object.fromEntries(
    Array.from({ length: MAX_STAGGERED }, (_, i) => {
      const d = `${baseMs + i * STAGGER_MS}ms`;
      return [
        `&:nth-of-type(${i + 1})`,
        { transitionDelay: `${d}, ${d}, 0ms, 0ms, 0ms` },
      ];
    }),
  );

/**
 * Scroll-reveal for a section. Hidden state only applies when motion is allowed, so content is
 * always visible for reduced-motion users. Direct content blocks fade up in order; children of
 * any `[data-stagger]` element (card grids) follow one by one.
 */
export const sectionReveal = (visible: boolean): CSSObject => {
  const state: CSSObject = visible
    ? { opacity: 1, translate: 'none' }
    : { opacity: 0, translate: '0 28px' };

  return {
    [MOTION_OK]: {
      '& .MuiContainer-root > *, & [data-stagger] > *': {
        transition: REVEAL_TRANSITION,
        ...state,
      },
      '& .MuiContainer-root > *': staggerDelays(0),
      '& [data-stagger] > *': staggerDelays(150),
    },
  };
};

/**
 * Hover "lift" for display cards: rises slightly, border warms to orange, soft glow,
 * and the card's icon tile lights up. Not for form cards.
 */
export const hoverLift = (theme: Theme): CSSObject => ({
  transition: `transform 300ms ${EASE_OUT}, border-color 250ms ease, box-shadow 300ms ease`,
  '& .icon-tile': {
    transition: 'background-color 250ms ease, color 250ms ease',
  },
  '&:hover': {
    borderColor: alpha(theme.palette.primary.main, 0.45),
    boxShadow: `0 18px 40px -18px ${alpha(theme.palette.primary.main, 0.35)}`,
    '& .icon-tile': {
      backgroundColor: alpha(theme.palette.primary.main, 0.16),
    },
    [MOTION_OK]: { transform: 'translateY(-4px)' },
  },
});
