import { Container, type ContainerProps } from '@mui/material';
import type { PropsWithChildren } from 'react';
import { useInView } from '../../hooks/useInView';
import {
  SectionRoot,
  type SectionGlow,
  type SectionTone,
} from './Section.style';

export interface SectionProps extends PropsWithChildren {
  id?: string;
  /** "raised" uses the slightly lighter surface, for alternating section backgrounds. */
  tone?: SectionTone;
  maxWidth?: ContainerProps['maxWidth'];
  /** Ambient glow behind the content (adds depth to long pages). */
  glow?: SectionGlow;
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
  glow,
  children,
}: SectionProps) {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <SectionRoot ref={ref} id={id} tone={tone} glow={glow} visible={inView}>
      <Container maxWidth={maxWidth}>{children}</Container>
    </SectionRoot>
  );
}
