const utils = (() => {

  // Returns one random sentence to be used in the chat
  const getRandomSentence = () => {
    const sentences = [
      'I see...',
      'All right!',
      'Interesting...',
      'Aha!',
      'Good answer :D',
      'Nice one!',
      'Okay',
      'Good, good...'
    ];

    var randomIndex = parseInt(Math.random() * sentences.length);

    return sentences[randomIndex] || sentences[0];
  }

  return {
    getRandomSentence
  }

})();

export default utils;