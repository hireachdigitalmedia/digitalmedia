import type { Feature } from '../../../data';
import {
  FlowCard,
  FlowList,
  FlowStep,
  FlowTitle,
} from './DistributionFlow.style';

export interface DistributionFlowProps {
  title: string;
  steps: Feature[];
}

/** Ordered flow from Hi Reach → partners → customers; the first step is highlighted. */
export function DistributionFlow({ title, steps }: DistributionFlowProps) {
  return (
    <FlowCard>
      <FlowTitle>{title}</FlowTitle>
      <FlowList>
        {steps.map(({ icon: Icon, label }, index) => (
          <FlowStep key={label} highlighted={index === 0}>
            <Icon aria-hidden />
            {label}
          </FlowStep>
        ))}
      </FlowList>
    </FlowCard>
  );
}
