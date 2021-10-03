import React from 'react';
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


const AppHeader = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography
          variant="h6"
        >
          Sorting Hat
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default AppHeader;