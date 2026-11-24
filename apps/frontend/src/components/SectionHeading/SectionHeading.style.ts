import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const HeadingRoot = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'align',
})<{ align: 'left' | 'center' }>(({ theme, align }) => ({
  textAlign: align,
  maxWidth: 760,
  marginLeft: align === 'center' ? 'auto' : undefined,
  marginRight: align === 'center' ? 'auto' : undefined,
  marginBottom: theme.spacing(6),
}));

export const Eyebrow = styled(Typography)(({ theme }) => ({
  display: 'block',
  color: theme.palette.primary.main,
  fontSize: '0.8125rem',
  marginBottom: theme.spacing(1.5),
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2),
  fontSize: '1.125rem',
  lineHeight: 1.6,
  color: theme.palette.text.secondary,
}));
