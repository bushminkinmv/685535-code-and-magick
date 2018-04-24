'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var GAP_TEXT = 16;
var gapCOLUMNS = CLOUD_Y + 3 * GAP_TEXT + 3 * GAP;
var COLUMN_WIDTH = 40;
var COLUMN_HEIGHT = 150;
var COLUMN_INDENT = 50;

var random_rgb = function(){
    return 'rgb(0, 0, 255, ' + Math.random() + ')';
}

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(times) {
  var MaxElement = times[0];

  for (var i = 0; i < times.length; i++) {
    if (times[i] > MaxElement) {
      MaxElement = times[i];
    }
  }

  return MaxElement;
}

window.renderStatistics = function(ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + GAP_TEXT + GAP * 2);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++ ) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = random_rgb();
    }
    ctx.fillRect(CLOUD_X + GAP + (COLUMN_INDENT + COLUMN_WIDTH) * i, COLUMN_HEIGHT + gapCOLUMNS - (COLUMN_HEIGHT * times[i]) / maxTime, COLUMN_WIDTH, (COLUMN_HEIGHT * times[i]) / maxTime);
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP + (5*GAP + COLUMN_WIDTH) * i, COLUMN_HEIGHT + gapCOLUMNS - (COLUMN_HEIGHT * times[i]) / maxTime - GAP_TEXT);
    ctx.fillText(names[i], CLOUD_X + GAP + (COLUMN_INDENT + COLUMN_WIDTH) * i, gapCOLUMNS + COLUMN_HEIGHT + GAP);
  }
};


