import type { IconLabel } from '../../data/types';
import { FlowCardRoot, FlowList, FlowStep, FlowTitle } from './FlowCard.style';

export interface FlowCardProps {
  steps: IconLabel[];
  title?: string;
}

/** Ordered flow (e.g. Hi Reach → partners → customers); the first step is highlighted. */
export function FlowCard({ steps, title }: FlowCardProps) {
  return (
    <FlowCardRoot>
      {title && <FlowTitle>{title}</FlowTitle>}
      <FlowList>
        {steps.map(({ icon: Icon, label }, index) => (
          <FlowStep key={label} highlighted={index === 0}>
            <Icon aria-hidden />
            {label}
          </FlowStep>
        ))}
      </FlowList>
    </FlowCardRoot>
  );
}
