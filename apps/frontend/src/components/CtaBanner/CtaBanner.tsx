import { Typography } from '@mui/material';
import type { CtaAction } from '../../data/types';
import { ActionButton } from '../ActionButton';
import { Section } from '../Section';
import { CtaActions, CtaContent } from './CtaBanner.style';

export interface CtaBannerProps {
  title: string;
  subtitle: string;
  primaryAction: CtaAction;
  secondaryAction?: CtaAction;
}

/** Centred closing call-to-action band used at the bottom of pages. */
export function CtaBanner({
  title,
  subtitle,
  primaryAction,
  secondaryAction,
}: CtaBannerProps) {
  return (
    <Section tone="raised">
      <CtaContent>
        <Typography variant="headlineLg" component="h2" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="bodyLg"
          color="text.secondary"
          sx={{ fontSize: '1.125rem' }}
        >
          {subtitle}
        </Typography>
        <CtaActions>
          <ActionButton action={primaryAction} />
          {secondaryAction && (
            <ActionButton action={secondaryAction} variant="outlined" />
          )}
        </CtaActions>
      </CtaContent>
    </Section>
  );
}
