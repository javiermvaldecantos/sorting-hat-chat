import React, { useState, useEffect } from 'react';

import Box from '@mui/material/Box';

import InteractiveChatMessages from '../InteractiveChatMessages';
import InteractiveChatControls from '../InteractiveChatControls';

import useInterval from '../../hooks/useInterval';

import questions from '../../data/questions.json';

import utils from '../../helper/utils';

import styles from './InteractiveChat.styles';

const InteractiveChat = () => {

  const [allMessages, setAllMessages] = useState([]);
  const [messagesToParticipant, setMessagesToParticipant] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [waitingForAnswer, setWaitingForAnswer] = useState(false);
  const [participantName, setParticipantName] = useState('');
  const [participantScore, setParticipantScore] = useState({ g: 0, r: 0, h: 0, s: 0 });
  
  useEffect(() => {
    displayIntroductoryMessages();
  }, []);

  useEffect(() => {
    if (participantName) {
      startQuiz();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [participantName]);

  useEffect(() => {
    if (currentQuestionIndex === questions.length) {
      finishQuiz();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentQuestionIndex]);

  useInterval(() => {
    // Checking for new messages to display to the participant
    if (messagesToParticipant.length > 0 && !waitingForAnswer) {
      const nextMessage = messagesToParticipant[0];
      const newMessagesToParticipant = messagesToParticipant.filter((message, index) => {
        return index !== 0;
      });
      setMessagesToParticipant(newMessagesToParticipant);
      addMessage(nextMessage);
    }
  }, 1000);

  const displayIntroductoryMessages = () => {
    const introductoryMessages = [
      { text: 'Hi there! This is the Sorting hat' },
      { text: 'By answering my questions, you\'ll find out the Hogwarts house you belong to' },
      { text: 'But first, let me know your name', waitForAnswer: true },
    ];
    setMessagesToParticipant(introductoryMessages);
  }

  const startQuiz = () => {
    const newMessagesToParticipant = [];

    const greeting = { text: 'All right ' + participantName + '! Let\'s start' };
    newMessagesToParticipant.push(greeting);

    for (let i = 0; i < questions.length; i++) {
      const questionObj = questions[i];
      if (i > 0) {
        // Add some random text between questions to make it a bit more human
        newMessagesToParticipant.push({ text: '...' });
        newMessagesToParticipant.push({ text: utils.getRandomSentence() });
        newMessagesToParticipant.push({ text: 'Next question:' });
      }
      const question = { text: questionObj.title }
      newMessagesToParticipant.push(question);

      if (questionObj.answers) {
        for (let j = 0; j < questionObj.answers.length; j++) {
          const answerOption = { text: (j+1) + '. ' + questionObj.answers[j].title }
          if ((j + 1 ) === questionObj.answers.length) {
            answerOption.waitForAnswer = true;
          }
          newMessagesToParticipant.push(answerOption);
        }
      }
    }

    setMessagesToParticipant(newMessagesToParticipant);
  };

  const finishQuiz = () => {
    let winningHouse = '';
    let winningScore = 0;
    let totalPoints = 0;
    for (let house in participantScore) {
      if (participantScore[house] > winningScore) {
        winningHouse = house;
        winningScore = participantScore[house];
        totalPoints += participantScore[house];
      }
    }

    const houseNames = { g: 'Gryffindor', r: 'Ravenclaw', h: 'Hufflepuff', s: 'Slytherin' }

    const finishingMessages = [
      { text: 'All right ' + participantName + ', that\'s it! Let me check your answers' },
      { text: '...' },
      { text: 'Well...' },
      { text: 'According to your answers you belong to...' },
      { text: houseNames[winningHouse] + '! By ' + parseInt(winningScore * 100 / totalPoints) + '%' },
    ];
    setMessagesToParticipant(finishingMessages);
  }

  const processParticipantAnswer = (answer) => {
    const newScore = {
      g: participantScore.g,
      r: participantScore.r,
      h: participantScore.h,
      s: participantScore.s
    }

    const currentQuestion = questions[currentQuestionIndex];

    if (currentQuestion) {
      const answerIndex = parseInt(answer) - 1;
      const answerObj = currentQuestion.answers[answerIndex];
      newScore.g = newScore.g + answerObj.scores.g;
      newScore.r = newScore.r + answerObj.scores.r;
      newScore.h = newScore.h + answerObj.scores.h;
      newScore.s = newScore.s + answerObj.scores.s;

      setParticipantScore(newScore);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  }

  const getCurrentOptionsCount = () => {
    const currentQuestion = questions[currentQuestionIndex];

    if (currentQuestion) {
      return currentQuestion.answers.length;
    } else {
      return 0;
    }
  }

  const onQuestionAnswered = (answer) => {
    const trimmedAnswer = (typeof answer === 'string') ? answer.trim() : answer;
    if (trimmedAnswer === '') {
      return;
    }

    if (!participantName) {
      setParticipantName(answer);
    } else {
      processParticipantAnswer(answer);
    }
    addMessage({
      text: answer,
      fromParticipant: true
    });
    setWaitingForAnswer(false);
  }

  const addMessage = (message) => {
    const newMessages = [];
    for (let i = 0; i < allMessages.length; i++) {
      newMessages.push(allMessages[i]);
    }
    newMessages.push(message);
    setAllMessages(newMessages);
    if (message.waitForAnswer === true) {
      setWaitingForAnswer(true);
    }
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
        <InteractiveChatMessages messages={allMessages} />
      </Box>
      
      <Box
        className="interactive-chat--controls-wrapper"
        sx={styles['interactive-chat--controls-wrapper']}
      >
        <InteractiveChatControls
          currentOptionsCount={getCurrentOptionsCount()}
          participantName={participantName}
          waitingForAnswer={waitingForAnswer}
          onQuestionAnswered={onQuestionAnswered}
        />
      </Box>
      
    </Box>
  );
}

export default InteractiveChat;