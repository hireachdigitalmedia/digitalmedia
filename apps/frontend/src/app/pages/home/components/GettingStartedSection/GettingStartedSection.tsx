import { Typography } from '@mui/material';
import { IconTile, Section, SectionHeading } from '../../../../../components';
import { GETTING_STARTED_CONTENT } from '../../data';
import { formatStepNumber } from '../../utils';
import { StepCard, StepGrid } from './GettingStartedSection.style';

export function GettingStartedSection() {
  const { eyebrow, title, steps } = GETTING_STARTED_CONTENT;

  return (
    <Section tone="raised">
      <SectionHeading eyebrow={eyebrow} title={title} />
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
    </Section>
  );
}
