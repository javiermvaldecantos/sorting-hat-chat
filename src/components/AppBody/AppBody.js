import React from 'react';

import InteractiveChat from '../InteractiveChat';

import Box from '@mui/material/Box';

import styles from './AppBody.styles';

const AppBody = () => {

  return (
    <Box
      className="app-body"
      sx={styles['app-body']}
      component="main"
    >
      <Box
        className="app-body--content"
        sx={styles['app-body--content']}
      >
        <InteractiveChat />
      </Box>
    </Box>
  );
}

export default AppBody;