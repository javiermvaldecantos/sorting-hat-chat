import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import styles from './interactiveChatControls.styles';

const InteractiveChatControls = ({addQuestion}) => {

  return (
    <Box
      className="interactive-chat-controls"
      sx={styles['interactive-chat-controls']}
    >
      <Button variant="contained" onClick={addQuestion}>Add</Button>
    </Box>
  );
}

export default InteractiveChatControls;