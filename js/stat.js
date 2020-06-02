'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 15;
var BAR_WIDTH = 40;
var TEXT_HEIGHT = 16;
var barHeight = 150;
var BAR_GAP=50;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};
var getMaxElement = function(arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура! Вы победили!', CLOUD_X+40, CLOUD_Y+25);
  ctx.fillStyle = '#000';
  ctx.fillText('Список результатов:', CLOUD_X+40, CLOUD_Y+40);

  var maxTime = getMaxElement(times);
  var saturate = 0;
  for (var i = 0; i < players.length; i++)
  {
  ctx.fillStyle = '#000';
  ctx.fillText(players[i], CLOUD_X + 2*GAP+ i*(BAR_WIDTH+BAR_GAP), CLOUD_HEIGHT + CLOUD_Y - GAP - TEXT_HEIGHT);
  ctx.fillText(Math.round(times[i]), CLOUD_X + 2*GAP+ i*(BAR_WIDTH+BAR_GAP), (CLOUD_HEIGHT + CLOUD_Y - GAP - TEXT_HEIGHT)-GAP-((barHeight * times[i]) / maxTime)-10);

  ctx.fillStyle = 'hsl(240, ' + Math.floor(Math.random() * 101) + '%, 25%)';
  if (players[i]==='Вы') {
    ctx.fillStyle = 'rgba(255, 0, 0, 1)'; }
ctx.fillRect((CLOUD_X + 2*GAP)+ i*(BAR_WIDTH+BAR_GAP) , (CLOUD_HEIGHT + CLOUD_Y - GAP - TEXT_HEIGHT)-GAP-(barHeight * times[i]) / maxTime, BAR_WIDTH, (barHeight * times[i]) / maxTime);
}
};
 //  Y = (barHeight * times[i]) / maxTime




