/*
 * Theme object for the whole app.
 * The theme defines colors, spacings, breakpoints, and anything else that can be reused.
 * 
 * These theme variables are added to the default theme to form a bigger object.
 * Check the default theme at https://mui.com/customization/default-theme/
 */
const theme = {
  contentMaxWidthPx: 600,

  palette: {
    // Primary color. Only 'main' is mandatory, the rest is optional
    primary: {
      light: '#484848',
      main: '#212121',
      dark: '#000000',
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