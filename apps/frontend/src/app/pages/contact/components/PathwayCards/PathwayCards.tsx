import { PATHWAYS, type EnquiryType } from '../../data';
import {
  PathwayButton,
  PathwayDescription,
  PathwayList,
  PathwayTitle,
} from './PathwayCards.style';

export interface PathwayCardsProps {
  selected: EnquiryType;
  onSelect: (type: EnquiryType) => void;
}

/** Selectable enquiry pathways; the choice drives the form's "Enquiry Type". */
export function PathwayCards({ selected, onSelect }: PathwayCardsProps) {
  return (
    <PathwayList role="radiogroup" aria-label="Enquiry type">
      {PATHWAYS.map(({ type, icon: Icon, title, description }) => (
        <PathwayButton
          key={type}
          type="button"
          role="radio"
          aria-checked={selected === type}
          selected={selected === type}
          onClick={() => onSelect(type)}
        >
          <Icon aria-hidden />
          <span>
            <PathwayTitle>{title}</PathwayTitle>
            <PathwayDescription>{description}</PathwayDescription>
          </span>
        </PathwayButton>
      ))}
    </PathwayList>
  );
}
