import React, { useState } from 'react';

import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';

import InteractiveChatTextInput from '../InteractiveChatTextInput';

import styles from './interactiveChatControls.styles';

const InteractiveChatControls = ({ onQuestionAnswered }) => {
  const [textInputValue, setTextInputValue] = useState('');

  const onFormSubmit = (event) => {
    event.preventDefault();

    onQuestionAnswered(textInputValue);

    setTextInputValue('');
  }

  return (
    <Box
      className="interactive-chat-controls"
      sx={styles['interactive-chat-controls']}
    >
      <Box
        className="interactive-chat-controls--inner"
        sx={styles['interactive-chat-controls--inner']}
      >
        <form
          autoComplete="off"
          onSubmit={onFormSubmit}
        >
          <InteractiveChatTextInput
            value={textInputValue}
            onChange={(event) => setTextInputValue(event.target.value)}
          />
        </form>
      </Box>
    </Box>
  );
}

export default InteractiveChatControls;