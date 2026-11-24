import { alpha, keyframes, styled } from '@mui/material/styles';

/** All sizes use container query units (cqw) so the guide scales with its box. */
export const Screen = styled('div')(({ theme }) => ({
  containerType: 'inline-size',
  position: 'relative',
  width: '100%',
  height: '100%',
  minHeight: '100%',
  aspectRatio: '16 / 9',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  gap: '2.2cqw',
  padding: '3.2cqw',
  color: theme.palette.text.primary,
  background: `radial-gradient(ellipse 80% 70% at 85% 0%, ${alpha(theme.palette.primary.main, 0.16)} 0%, transparent 60%),
    radial-gradient(ellipse 60% 60% at 0% 100%, ${alpha(theme.palette.tertiary.main, 0.08)} 0%, transparent 60%),
    linear-gradient(160deg, #17171f 0%, #0c0c10 100%)`,
}));

export const TopBar = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const GuideTitle = styled('span', {
  shouldForwardProp: (prop) => prop !== 'compact',
})<{ compact: boolean }>(({ theme, compact }) => ({
  fontFamily: theme.typography.displayLg.fontFamily,
  fontWeight: 700,
  fontSize: compact ? '3.6cqw' : '3cqw',
  letterSpacing: '0.08em',
  display: 'flex',
  alignItems: 'center',
  gap: '1.4cqw',
}));

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.35; }
`;

export const LiveBadge = styled('span', {
  shouldForwardProp: (prop) => prop !== 'compact',
})<{ compact: boolean }>(({ theme, compact }) => ({
  fontFamily: theme.typography.bodyLg.fontFamily,
  fontWeight: 700,
  fontSize: compact ? '2.6cqw' : '1.9cqw',
  letterSpacing: '0.1em',
  padding: '0.3cqw 1cqw',
  borderRadius: '0.6cqw',
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  '&::before': {
    content: '"●"',
    marginRight: '0.6cqw',
    animation: `${pulse} 1.6s ease-in-out infinite`,
  },
  '@media (prefers-reduced-motion: reduce)': {
    '&::before': { animation: 'none' },
  },
}));

export const Clock = styled('span', {
  shouldForwardProp: (prop) => prop !== 'compact',
})<{ compact: boolean }>(({ theme, compact }) => ({
  fontFamily: theme.typography.displayLg.fontFamily,
  fontWeight: 600,
  fontSize: compact ? '3.2cqw' : '2.7cqw',
  color: theme.palette.text.secondary,
}));

export const Body = styled('div', {
  shouldForwardProp: (prop) => prop !== 'compact',
})<{ compact: boolean }>(({ compact }) => ({
  flex: 1,
  minHeight: 0,
  display: 'grid',
  gridTemplateColumns: compact ? '1fr' : '1fr 30%',
  gap: '2.2cqw',
}));

export const Grid = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.9cqw',
  minWidth: 0,
});

export const Row = styled('div', {
  shouldForwardProp: (prop) => prop !== 'compact',
})<{ compact: boolean }>(({ compact }) => ({
  display: 'grid',
  gridTemplateColumns: compact ? '30% 1fr' : '29% 1fr',
  gap: '0.9cqw',
  flex: 1,
  minHeight: 0,
}));

export const TimeHeader = styled(Row)(({ theme }) => ({
  flex: 'none',
  color: theme.palette.text.secondary,
}));

export const TimeLabels = styled('div', {
  shouldForwardProp: (prop) => prop !== 'compact',
})<{ compact: boolean }>(({ theme, compact }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  fontFamily: theme.typography.bodyLg.fontFamily,
  fontWeight: 600,
  fontSize: compact ? '2.6cqw' : '2cqw',
}));

export const ChannelCell = styled('div', {
  shouldForwardProp: (prop) => !['active', 'compact'].includes(prop as string),
})<{ active: boolean; compact: boolean }>(({ theme, active, compact }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '1cqw',
  padding: '0 1.2cqw',
  borderRadius: '0.9cqw',
  fontFamily: theme.typography.bodyLg.fontFamily,
  fontWeight: 600,
  fontSize: compact ? '2.5cqw' : '2cqw',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  backgroundColor: active
    ? alpha(theme.palette.primary.main, 0.18)
    : 'rgba(255,255,255,0.04)',
  color: active ? theme.palette.text.primary : theme.palette.text.secondary,
  transition: 'background-color 400ms ease, color 400ms ease',
  '& b': {
    color: active ? theme.palette.primary.main : theme.palette.outline.main,
  },
}));

export const Track = styled('div')({
  position: 'relative',
  minWidth: 0,
});

export const Programme = styled('div', {
  shouldForwardProp: (prop) =>
    !['active', 'compact', 'onNow'].includes(prop as string),
})<{ active: boolean; compact: boolean; onNow: boolean }>(
  ({ theme, active, compact, onNow }) => ({
    position: 'absolute',
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    padding: '0 1.2cqw',
    borderRadius: '0.9cqw',
    fontFamily: theme.typography.bodyLg.fontFamily,
    fontWeight: onNow ? 600 : 500,
    fontSize: compact ? '2.5cqw' : '2cqw',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    boxShadow: 'inset -0.45cqw 0 0 #0c0c10',
    border: `0.15cqw solid ${active && onNow ? theme.palette.primary.main : 'transparent'}`,
    backgroundColor:
      active && onNow
        ? alpha(theme.palette.primary.main, 0.28)
        : onNow
          ? 'rgba(255,255,255,0.09)'
          : 'rgba(255,255,255,0.045)',
    color:
      active || onNow
        ? theme.palette.text.primary
        : theme.palette.text.secondary,
    transition: 'background-color 400ms ease, border-color 400ms ease',
    ...(active &&
      onNow && {
        boxShadow: `0 0 2.4cqw ${alpha(theme.palette.primary.main, 0.45)}`,
      }),
  }),
);

export const NowLine = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '-0.6cqw',
  bottom: '-0.6cqw',
  width: '0.25cqw',
  borderRadius: '0.25cqw',
  backgroundColor: theme.palette.primary.main,
  boxShadow: `0 0 1.2cqw ${theme.palette.primary.main}`,
  zIndex: 1,
  transition: 'left 1s linear',
}));

export const Preview = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2cqw',
  padding: '1.6cqw',
  borderRadius: '1.4cqw',
  backgroundColor: 'rgba(255,255,255,0.05)',
  border: `0.12cqw solid ${theme.palette.outline.variant}`,
  minWidth: 0,
}));

const drift = keyframes`
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
`;

export const PreviewArt = styled('div')(({ theme }) => ({
  aspectRatio: '16 / 10',
  borderRadius: '1cqw',
  display: 'grid',
  placeItems: 'center',
  background: `linear-gradient(120deg, ${alpha(theme.palette.primary.main, 0.65)}, #2a1a3a, ${alpha(theme.palette.tertiary.main, 0.45)}, ${alpha(theme.palette.primary.main, 0.65)})`,
  backgroundSize: '300% 100%',
  animation: `${drift} 8s ease-in-out infinite alternate`,
  '& .MuiSvgIcon-root': { fontSize: '4cqw', color: '#fff', opacity: 0.9 },
  '@media (prefers-reduced-motion: reduce)': { animation: 'none' },
}));

export const PreviewLabel = styled('span')(({ theme }) => ({
  fontFamily: theme.typography.bodyLg.fontFamily,
  fontWeight: 700,
  fontSize: '1.6cqw',
  letterSpacing: '0.1em',
  color: theme.palette.primary.main,
}));

export const PreviewTitle = styled('span')(({ theme }) => ({
  fontFamily: theme.typography.displayLg.fontFamily,
  fontWeight: 700,
  fontSize: '2.4cqw',
  lineHeight: 1.2,
}));

export const PreviewMeta = styled('span')(({ theme }) => ({
  fontFamily: theme.typography.bodyLg.fontFamily,
  fontSize: '1.6cqw',
  color: theme.palette.text.secondary,
}));

export const Progress = styled('div')(({ theme }) => ({
  height: '0.5cqw',
  borderRadius: '0.5cqw',
  backgroundColor: 'rgba(255,255,255,0.1)',
  overflow: 'hidden',
  '& > span': {
    display: 'block',
    height: '100%',
    backgroundColor: theme.palette.primary.main,
    transition: 'width 1s linear',
  },
}));
