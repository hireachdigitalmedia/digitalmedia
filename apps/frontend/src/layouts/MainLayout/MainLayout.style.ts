import { styled } from '@mui/material/styles';
import { HEADER_HEIGHT } from '../../components/Header';

export const LayoutRoot = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});

/** Reserves the fixed header's full height, so content never jumps when the header compacts. */
export const HeaderSpacer = styled('div')({
  height: HEADER_HEIGHT,
  flexShrink: 0,
});

export const Main = styled('main')({
  flex: 1,
});
