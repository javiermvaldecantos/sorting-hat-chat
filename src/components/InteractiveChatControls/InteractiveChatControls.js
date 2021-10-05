import React, { useState } from 'react';

import Box from '@mui/material/Box';

import InteractiveChatTextInput from '../InteractiveChatTextInput';
// import InteractiveChatOptionSelector from '../InteractiveChatOptionSelector';

import styles from './interactiveChatControls.styles';

const InteractiveChatControls = ({ currentOptionsCount, participantName, waitingForAnswer, onQuestionAnswered }) => {
  const [textInputValue, setTextInputValue] = useState('');

  const onTextInputChange = (event) => {
    const value = event.target.value;

    if (value && participantName && currentOptionsCount) {
      // At this point of the quiz the user can only answer using numbers
      const inputRegex = (currentOptionsCount > 9) ? /^\d{1,2}$/ : /^\d$/;
      if (inputRegex.test(value)) {
        const numericValue = parseInt(value);
        if (numericValue <= currentOptionsCount) {
          setTextInputValue(value);
        }
      }
    } else {
      setTextInputValue(value);
    }
  }

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
            onChange={onTextInputChange}
            currentOptionsCount={currentOptionsCount}
            participantName={participantName}
            waitingForAnswer={waitingForAnswer}
          />
        </form>
      </Box>
    </Box>
  );
}

export default InteractiveChatControls;