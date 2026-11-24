import { Typography } from '@mui/material';
import type { Step } from '../../data/types';
import { formatStepNumber } from '../../utils/format';
import { IconTile } from '../IconTile';
import { StepCard, StepGrid } from './StepCards.style';

export interface StepCardsProps {
  steps: Step[];
}

/** Numbered step cards (orange number badge, title, description). */
export function StepCards({ steps }: StepCardsProps) {
  return (
    <StepGrid>
      {steps.map((step, index) => (
        <li key={step.title}>
          <StepCard>
            <IconTile shape="circle" tone="solid">
              <Typography variant="titleLg" component="span">
                {formatStepNumber(index)}
              </Typography>
            </IconTile>
            <Typography variant="titleLg" component="h3">
              {step.title}
            </Typography>
            <Typography variant="bodyLg" color="text.secondary">
              {step.description}
            </Typography>
          </StepCard>
        </li>
      ))}
    </StepGrid>
  );
}
