'use strict';

const tweetsAndSentiments = require('./tweets-and-sentiments');

var uiStateStream = function (tweets$) {
  const tweetsAndSentiments$ = tweetsAndSentiments(tweets$);

  const uiState$ = tweetsAndSentiments$.map((data) => {
    return {
      tweet: data[0],
      sentiment: data[1]
    };
  });

  return uiState$;
};

module.exports = uiStateStream;
