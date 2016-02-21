'use strict';

const colors = require('colors');

const createLogRenderer = function (logComponent) {
  const renderLog = function (uiState) {
    if (uiState.sentiment.score > 0) {
      logComponent.log(colors.green(`[${uiState.sentiment.score}] ${uiState.tweet.text}`));
    } else if (uiState.sentiment.score < 0) {
      logComponent.log(colors.red(`[${uiState.sentiment.score}] ${uiState.tweet.text}`));
    } else {
      logComponent.log(colors.white(`[${uiState.sentiment.score}] ${uiState.tweet.text}`));
    }
  };

  return renderLog;
};

module.exports = createLogRenderer;
