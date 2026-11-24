import { Typography } from '@mui/material';
import { Eyebrow, HeadingRoot, Subtitle } from './SectionHeading.style';

export interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  align?: 'left' | 'center';
  /** Use "h1" when the heading is the page title. */
  as?: 'h1' | 'h2';
  /** Remove the bottom margin (e.g. when the heading sits in a row with a button). */
  disableGutter?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  eyebrow,
  align = 'left',
  as = 'h2',
  disableGutter,
}: SectionHeadingProps) {
  return (
    <HeadingRoot align={align} sx={disableGutter ? { mb: 0 } : undefined}>
      {eyebrow && <Eyebrow variant="overline">{eyebrow}</Eyebrow>}
      <Typography variant="headlineLg" component={as}>
        {title}
      </Typography>
      {subtitle && <Subtitle variant="bodyLg">{subtitle}</Subtitle>}
    </HeadingRoot>
  );
}
