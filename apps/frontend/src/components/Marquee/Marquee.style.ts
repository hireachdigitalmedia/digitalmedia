import { keyframes, styled } from '@mui/material/styles';
import { MOTION_OK } from '../../theme/effects';

const scroll = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`;

export const MarqueeRoot = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  padding: theme.spacing(3, 0),
  borderTop: `1px solid ${theme.palette.outline.variant}`,
  borderBottom: `1px solid ${theme.palette.outline.variant}`,
  backgroundColor: theme.palette.surface.containerLow,
  // fade the edges
  maskImage:
    'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
  WebkitMaskImage:
    'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
}));

export const Track = styled('ul')({
  display: 'flex',
  width: 'max-content',
  margin: 0,
  padding: 0,
  listStyle: 'none',
  [MOTION_OK]: {
    animation: `${scroll} 40s linear infinite`,
    '&:hover': { animationPlayState: 'paused' },
  },
});

export const Item = styled('li')(({ theme }) => ({
  ...theme.typography.headlineSm,
  display: 'flex',
  alignItems: 'center',
  whiteSpace: 'nowrap',
  color: theme.palette.text.secondary,
  '&::after': {
    content: '""',
    width: 8,
    height: 8,
    margin: theme.spacing(0, 4),
    borderRadius: '50%',
    backgroundColor: theme.palette.primary.main,
  },
}));
