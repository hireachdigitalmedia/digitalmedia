import { Typography } from '@mui/material';
import { Eyebrow, HeadingRoot } from './SectionHeading.style';

export interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  align?: 'left' | 'center';
  /** Use "h1" when the heading is the page title. */
  as?: 'h1' | 'h2';
}

export function SectionHeading({
  title,
  subtitle,
  eyebrow,
  align = 'left',
  as = 'h2',
}: SectionHeadingProps) {
  return (
    <HeadingRoot align={align}>
      {eyebrow && <Eyebrow variant="overline">{eyebrow}</Eyebrow>}
      <Typography
        variant={as === 'h1' ? 'h3' : 'h4'}
        component={as}
        gutterBottom
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="body1" color="text.secondary">
          {subtitle}
        </Typography>
      )}
    </HeadingRoot>
  );
}
