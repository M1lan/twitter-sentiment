// Time-stamp: <2016-09-16 13:12:36 milan.santosi@dojomadness.com>

'use strict';

const colors = require('colors/safe');
const Rx = require('rx');

const tweetsAndSentiments = require('./lib/tweets-and-sentiments');

var uiStateStream = function (tweets$) {
  const tweetsAndSentiments$ = tweetsAndSentiments(tweets$);

  const uiStateStream = tweetsAndSentiments$.map((data) => {
    return {
      tweet: data[0],
      sentiment: data[1]
    };

    // if (sentiment.score > 0) {
    //   return colors.green(`[${sentiment.score}] ${tweet.text}`);
    // } else if (sentiment.score < 0) {
    //   return colors.red(`[${sentiment.score}] ${tweet.text}`);
    // } else {
    //   return `[${sentiment.score}] ${tweet.text}`;
    // }
  });

  return uiStateStream;
};

module.exports = uiStateStream;
