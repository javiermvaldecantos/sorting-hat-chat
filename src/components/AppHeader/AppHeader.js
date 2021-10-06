import React from 'react';
import AppBar from '@mui/material/AppBar';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import logo from '../../images/header_logo.png';

import styles from './AppHeader.styles';

const AppHeader = () => {
  return (
    <AppBar
      className="app-header"
    >
      <Toolbar>
        <Box
          className="app-header--logo-wrapper"
          sx={styles['app-header--logo-wrapper']}
        >
          <img src={logo} alt="Sorting Hat Logo"/>
        </Box>
        <Typography
          className="app-header--title"
          sx={styles['app-header--title']}
          variant="h6"
        >
          Sorting Hat
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default AppHeader;