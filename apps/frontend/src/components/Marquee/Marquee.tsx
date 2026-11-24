import { Item, MarqueeRoot, Track } from './Marquee.style';

export interface MarqueeProps {
  items: string[];
  /** Accessible description of the list. */
  label: string;
}

/**
 * Endless horizontal ticker. The list is rendered twice for a seamless loop; the copy is hidden
 * from screen readers. Pauses on hover and stays still for reduced-motion users.
 */
export function Marquee({ items, label }: MarqueeProps) {
  return (
    <MarqueeRoot>
      <Track aria-label={label}>
        {items.map((item) => (
          <Item key={item}>{item}</Item>
        ))}
        {items.map((item) => (
          <Item key={`${item}-copy`} aria-hidden>
            {item}
          </Item>
        ))}
      </Track>
    </MarqueeRoot>
  );
}
