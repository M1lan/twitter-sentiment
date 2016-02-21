'use strict';

const _ = require('lodash');

const createWordCountRenderer = function (wordCountTable) {
  const renderWordCount = function (counts) {
    wordCountTable.setData({
      headers: ['Word', 'Count'],
      data: counts
    });
  };

  return renderWordCount;
};

module.exports = createWordCountRenderer;
