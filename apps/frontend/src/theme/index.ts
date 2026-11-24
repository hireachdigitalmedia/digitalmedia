import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#0B2E83' },
    secondary: { main: '#E31B23' },
    background: { default: '#FFFFFF', paper: '#F7F8FC' },
  },
  shape: { borderRadius: 10 },
  typography: {
    fontFamily:
      '"Inter", "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    h1: { fontWeight: 800 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  components: {
    MuiButton: { defaultProps: { disableElevation: true } },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
