import React from 'react';
import { TransitionGroup } from 'react-transition-group';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import Grow from '@mui/material/Grow';

import styles from './InteractiveChatMessages.styles';

const InteractiveChatMessages = ({ messages }) => {
  return (
    <Box
      className="interactive-chat-messages"
      sx={styles['interactive-chat-messages']}
    >
      <TransitionGroup>
        {messages.map((message, index) =>
          <Collapse key={index} timeout={450}>
            <Box
              className="interactive-chat-messages--message-wrapper"
              sx={styles['interactive-chat-messages--message-wrapper']}
              data-type={message.fromParticipant ? 'sent' : 'received'}
            >
              <Grow
                in={true}
                style={{ transformOrigin: 'top ' + (message.fromParticipant ? 'right' : 'left') }}
                timeout={750}
              >
                <Typography
                  className="interactive-chat-messages--message"
                  sx={styles['interactive-chat-messages--message']}
                  data-type={message.fromParticipant ? 'sent' : 'received'}
                  variant="body1"
                >
                  {message.text}
                </Typography>
              </Grow>
            </Box>
          </Collapse>
        )}
      </TransitionGroup>
    </Box>
  );
}

export default InteractiveChatMessages;