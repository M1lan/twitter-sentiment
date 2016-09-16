// Time-stamp: <2016-09-16 13:17:40 milan.santosi@dojomadness.com>

'use strict';

const createLineRenderer =
  function (line) {
    const renderLine = function (data) {
                         const labels = data.map((sentiment, index) => index);
                         const lineData = {
                           x: labels,
                           y: data
                         };

                         line.setData([lineData]);
                       };

    return renderLine;
  };

module.exports = createLineRenderer;
