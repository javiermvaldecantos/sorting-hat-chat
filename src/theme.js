const theme = {
  contentMaxWidthPx: 600,

  palette: {
    // 'light' or 'dark' for light/dark mode
    type: 'light',

    // Primary color. Only 'main' is mandatory, the rest is optional
    primary: {
      light: '#42a5f5',
      main: '#1976d2',
      dark: '#1565c0',
      contrastText: '#fff'
    },

    // Secondary color. Only 'main' is mandatory, the rest is optional
    secondary: {
      light: '#ba68c8',
      main: '#9c27b0',
      dark: '#7b1fa2',
      contrastText: '#fff'
    },

    // Error color. Only 'main' is mandatory, the rest is optional
    error: {
      light: '#e57373',
      main: '#e13023',
      dark: '#d32f2f',
      contrastText: '#fff'
    }
  },
};

export default theme;