var CLOUD_WIDTH = 270;
var CLOUD_HEIGHT = 420;
var CLOUD_POS_X = 110;
var CLOUD_POS_Y = 10;
var CLOUD_BG_COLOR = '#fff';
var GAP = 10
var SHADOW_COLOR = 'rgba(0, 0, 0, 0.7';
var FONT_GAP = 16;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
}

window.renderStatistics = function(ctx, names, times) {
  renderCloud(ctx, CLOUD_POS_X + GAP, CLOUD_POS_Y + GAP, SHADOW_COLOR);
  renderCloud(ctx, CLOUD_POS_X, CLOUD_POS_Y, CLOUD_BG_COLOR);

  ctx.fillStyle = '#000';

  ctx.font="16px PT Mono";
  ctx.fillText('Ура вы победили!', CLOUD_POS_X + GAP, CLOUD_POS_Y + GAP + FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_POS_X + GAP, CLOUD_POS_Y + GAP + FONT_GAP * 2);
};


