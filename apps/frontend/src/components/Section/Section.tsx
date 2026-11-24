import { Container, type ContainerProps } from '@mui/material';
import type { PropsWithChildren } from 'react';
import { SectionRoot, type SectionTone } from './Section.style';

export interface SectionProps extends PropsWithChildren {
  id?: string;
  /** "raised" uses the slightly lighter surface, for alternating section backgrounds. */
  tone?: SectionTone;
  maxWidth?: ContainerProps['maxWidth'];
}

/** Standard page section: vertical rhythm, background tone and a centred container. */
export function Section({
  id,
  tone = 'base',
  maxWidth = 'lg',
  children,
}: SectionProps) {
  return (
    <SectionRoot id={id} tone={tone}>
      <Container maxWidth={maxWidth}>{children}</Container>
    </SectionRoot>
  );
}
