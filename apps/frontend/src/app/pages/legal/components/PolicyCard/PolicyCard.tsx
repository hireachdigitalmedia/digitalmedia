import type { Policy } from '../../data';
import {
  PolicyCardRoot,
  PolicyStatus,
  PolicyText,
  PolicyTitle,
} from './PolicyCard.style';

export function PolicyCard({ id, title, status, paragraphs }: Policy) {
  return (
    <PolicyCardRoot id={id} aria-labelledby={`${id}-title`}>
      <PolicyTitle id={`${id}-title`}>{title}</PolicyTitle>
      {status && <PolicyStatus>{status}</PolicyStatus>}
      {paragraphs.map((text) => (
        <PolicyText key={text}>{text}</PolicyText>
      ))}
    </PolicyCardRoot>
  );
}
