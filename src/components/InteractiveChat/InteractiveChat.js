import React, { useState } from 'react';

import InteractiveChatMessages from '../InteractiveChatMessages';
import InteractiveChatControls from '../InteractiveChatControls';

import Box from '@mui/material/Box';

import questions from '../../data/questions.json';

import styles from './InteractiveChat.styles';

const InteractiveChat = () => {

  const [messages, setMessages] = useState([]);

  const addOneMoreQuestion = () => {
    const numberOfExistingMessages = messages.length;

    if (questions[numberOfExistingMessages]) {
      addMessage({
        text: questions[numberOfExistingMessages].title,
        type: (Math.random() > 0.5) ? 'sent' : 'received'
      })
    }
  }

  const addMessage = (message) => {
    const newMessages = [];

    for (let i = 0; i < messages.length; i++) {
      newMessages.push(messages[i]);
    }

    newMessages.push(message);

    setMessages(newMessages);
  }

  return (
    <Box
      className="interactive-chat"
      sx={styles['interactive-chat']}
    >

      <Box
        className="interactive-chat--messages-wrapper"
        sx={styles['interactive-chat--messages-wrapper']}
      >
        <InteractiveChatMessages messages={messages} />
      </Box>
      
      <Box
        className="interactive-chat--controls-wrapper"
        sx={styles['interactive-chat--controls-wrapper']}
      >
        <InteractiveChatControls addQuestion={addOneMoreQuestion} />
      </Box>
      
    </Box>
  );
}

export default InteractiveChat;