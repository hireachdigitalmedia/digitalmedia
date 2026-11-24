import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export type LogoSize = 'md' | 'lg';

export const LogoLink = styled(Link)({
  display: 'inline-flex',
  alignItems: 'center',
  flexShrink: 0,
});

/** logo-light.png: the brand logo with white lettering, for dark backgrounds. */
export const LogoImage = styled('img', {
  shouldForwardProp: (prop) => prop !== 'size',
})<{ size: LogoSize }>(({ theme, size }) => ({
  width: 'auto',
  height: size === 'lg' ? 64 : 52,
  [theme.breakpoints.down('sm')]: { height: size === 'lg' ? 56 : 44 },
}));
