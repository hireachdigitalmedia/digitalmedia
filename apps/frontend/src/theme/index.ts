import { createTheme } from '@mui/material/styles';
import './theme.types';
import { components } from './components';
import { palette } from './palette';
import { radius } from './tokens';
import { typography } from './typography';

const theme = createTheme({
  palette,
  typography,
  shape: { borderRadius: radius.sm },
  components,
});

export default theme;
export { colors, fonts, radius } from './tokens';
