//Time-stamp: <2016-09-16 13:19:31 milan.santosi@dojomadness.com>

'use strict';

const _ = require('lodash');

const createWordCountRenderer =
  function (wordCountTable) {
    const renderWordCount =
      function (counts) {
        wordCountTable.setData({
          headers: ['Word', 'Count'],
          data: counts
        });
      };

    return renderWordCount;
  };

module.exports = createWordCountRenderer;
