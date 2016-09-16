// Time-stamp: <2016-09-16 13:16:13 milan.santosi@dojomadness.com>

'use strict';

const Rx = require('rx');
const Twitter = require('twitter');
const config = require('../config.js');
const client = new Twitter(config);

const getTweetStream = function (track) {
  return Rx.Observable.create(function (observer) {
    let twitterStream;

    client.stream('statuses/filter', { track: track }, function (stream) {
      twitterStream = stream;
      stream.on('data', function (tweet) {
        observer.onNext(tweet);
      });

      stream.on('error', function (error) {
        observer.onError(error);
      });
    });

    return function cleanup () {
      twitterStream.destroy();
    };
  }).publish().refCount();
};

module.exports = getTweetStream;
