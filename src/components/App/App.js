import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import theme from '../../theme';

import AppHeader from '../AppHeader';
import AppBody from '../AppBody';

import styles from './App.styles';

const App = () => {
  return (
    <ThemeProvider theme={createTheme(theme)}>
      <CssBaseline />

      <Box sx={styles['app']}>
        <AppHeader />
        <AppBody />
      </Box>
    </ThemeProvider>
  );
}

export default App;
