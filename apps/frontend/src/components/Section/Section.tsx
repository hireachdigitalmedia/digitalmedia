import { Container, type ContainerProps } from '@mui/material';
import type { PropsWithChildren } from 'react';
import { useInView } from '../../hooks/useInView';
import { SectionRoot, type SectionTone } from './Section.style';

export interface SectionProps extends PropsWithChildren {
  id?: string;
  /** "raised" uses the slightly lighter surface, for alternating section backgrounds. */
  tone?: SectionTone;
  maxWidth?: ContainerProps['maxWidth'];
}

/**
 * Standard page section: vertical rhythm, background tone and a centred container.
 * Content fades up when the section scrolls into view; card grids marked `data-stagger`
 * reveal their items one after another.
 */
export function Section({
  id,
  tone = 'base',
  maxWidth = 'lg',
  children,
}: SectionProps) {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <SectionRoot ref={ref} id={id} tone={tone} visible={inView}>
      <Container maxWidth={maxWidth}>{children}</Container>
    </SectionRoot>
  );
}
