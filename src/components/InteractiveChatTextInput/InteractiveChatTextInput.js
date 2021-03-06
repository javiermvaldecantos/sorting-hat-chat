import React, { useState, useEffect } from 'react';

import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import visuallyHidden from '@mui/utils/visuallyHidden';

import styles from './InteractiveChatTextInput.styles';

const InteractiveChatTextInput = ({ value, onChange, currentOptionsCount, participantName, waitingForAnswer }) => {

  const [numericFormat, setNumericFormat] = useState(false);

  useEffect(() => {
    if (participantName && !waitingForAnswer) {
      // Answers must have numeric format after the participant enters their name
      setNumericFormat(true);
    }
  }, [participantName, waitingForAnswer]);

  const getLabel = () => {
    let label = '';

    if (numericFormat) {
      label += 'Numeric answer'; 
      label += currentOptionsCount ? (' (1 - ' + currentOptionsCount + ')') : '';
    } else {
      label = 'Your Name';
    }

    return label;
  }

  return (
    <Grid
      className="interactive-chat-text-input"
      container
      spacing={2}
    >
      <Grid
        item
        xs={9}
        sm={10}
      >
        <TextField
          id="interactive-chat-text-input--input"
          className="interactive-chat-text-input--input"
          type={numericFormat ? 'tel' : 'text'}
          label={getLabel()}
          value={value}
          onChange={onChange}
          variant="outlined"
          margin="none"
          fullWidth={true}
          inputProps={{
            readOnly: !waitingForAnswer,
            maxLength: participantName ? 2 : 64
          }}
        />
      </Grid>
      <Grid
        item
        xs={3}
        sm={2}
      >
        <Button
          className="interactive-chat-text-input--submit"
          sx={styles['interactive-chat-text-input--submit']}
          type="submit"
          variant="contained"
          size="large"
          fullWidth={true}
        >
          <span style={visuallyHidden}>Send</span>
          <SendIcon />
        </Button>
      </Grid>
    </Grid>
  );
}

export default InteractiveChatTextInput;