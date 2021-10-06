import React, { useState } from 'react';

import Box from '@mui/material/Box';

import InteractiveChatTextInput from '../InteractiveChatTextInput';

import styles from './interactiveChatControls.styles';

const InteractiveChatControls = ({ currentOptionsCount, participantName, waitingForAnswer, onQuestionAnswered }) => {
  const [textInputValue, setTextInputValue] = useState('');

  const onTextInputChange = (event) => {
    const value = event.target.value;

    if (value && participantName && currentOptionsCount) {
      // At this point of the quiz the user can only answer using numbers, from 1 to currentOptionsCount
      const inputRegex = (currentOptionsCount > 9) ? /^\d{1,2}$/ : /^\d$/;
      if (inputRegex.test(value)) {
        const numericValue = parseInt(value);
        if ((numericValue > 0) && (numericValue <= currentOptionsCount)) {
          setTextInputValue(value);
        }
      }
    } else {
      // The user is going to type their name, so we allow any value
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