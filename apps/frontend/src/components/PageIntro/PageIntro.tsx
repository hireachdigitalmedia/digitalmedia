import { Container, type ContainerProps } from '@mui/material';
import type { ReactNode } from 'react';
import { Extra, Eyebrow, IntroRoot, Subtitle, Title } from './PageIntro.style';

export interface PageIntroProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  /** Optional content under the subtitle (e.g. jump links). */
  children?: ReactNode;
  maxWidth?: ContainerProps['maxWidth'];
}

/** Text-only page header (eyebrow, large title, subtitle) for pages without a hero image. */
export function PageIntro({
  eyebrow,
  title,
  subtitle,
  children,
  maxWidth = 'lg',
}: PageIntroProps) {
  return (
    <IntroRoot>
      <Container maxWidth={maxWidth}>
        <Eyebrow>{eyebrow}</Eyebrow>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        {children && <Extra>{children}</Extra>}
      </Container>
    </IntroRoot>
  );
}
