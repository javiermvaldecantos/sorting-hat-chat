import React from 'react';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import styles from './AppBody.styles';

const AppBody = () => {

  return (
    <Box component="main" sx={styles['wrapper']}>
      {/* This element adds a spacing equal to the height of the header, so that the top part of the body isn't hidden. */}
      <Toolbar sx={styles['header-spacing']} aria-hidden="true" />

      <Box sx={styles['content']}>
        App content
      </Box>
    </Box>
  );
}

export default AppBody;