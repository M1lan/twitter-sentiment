'use strict';

const sentiment = require('sentiment');
const Rx = require('rx');

var getTweetsAndSentiments = function (tweetStream) {
  const sentiments = tweetStream.map((tweet) => {
    return sentiment(tweet.text);
  });

  return Rx.Observable.zip(tweetStream, sentiments);
};

module.exports = getTweetsAndSentiments;
