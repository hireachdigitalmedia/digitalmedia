/**
 * Document position of an element from its layout box (`offsetTop` chain). Unlike
 * `getBoundingClientRect`, this ignores transforms/translate, so it stays correct while
 * reveal animations are still moving content into place.
 */
function layoutTop(el: HTMLElement): number {
  let top = 0;
  let node: HTMLElement | null = el;
  while (node) {
    top += node.offsetTop;
    node = node.offsetParent as HTMLElement | null;
  }
  return top;
}

/** Space kept above a scrolled-to element (matches `scroll-padding-top` for the sticky header). */
function headerOffset(): number {
  return (
    parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) ||
    88
  );
}

/** Scrolls so `el` sits just below the sticky header. */
export function scrollToElement(
  el: HTMLElement,
  behavior: ScrollBehavior = 'smooth',
) {
  window.scrollTo({
    top: Math.max(0, layoutTop(el) - headerOffset()),
    behavior,
  });
}

/** Smoothly scrolls to a section on the current page. */
export function scrollToSection(sectionId: string) {
  const el = document.getElementById(sectionId);
  if (el) scrollToElement(el);
}
