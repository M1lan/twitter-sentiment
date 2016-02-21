'use strict';

const createLineRenderer = function (line) {
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
