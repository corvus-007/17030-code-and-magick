'use strict';

window.renderStatistics = function (ctx, names, times) {
  var offsetShadow = 10;

  ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  ctx.shadowOffsetX = 10;
  ctx.shadowOffsetY = 10;
  ctx.fillStyle = '#fff';
  ctx.fillRect(100, 10, 420, 270);
  ctx.shadowColor = 'rgba(0, 0, 0, 0)';
  ctx.fillStyle = '#000';
  ctx.textBaseline = 'hanging';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 30);
  ctx.fillText('Список результатов:', 120, 50);

  var max = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

  var barHeight = 150;
  var histogramWidth = 40;
  var step = barHeight / max;
  var indent = 50;
  var currentBarHeight = null;
  var currentBarOffsetX = null;
  var textIndent = 5;
  var initialX = 130;
  var initialY = 100;

  for (var i = 0; i < times.length; i++) {
    currentBarHeight = step * times[i];
    currentBarOffsetX = initialX + (histogramWidth + indent) * i;

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(240, ' + (Math.random() * 100) + '%, 50%)';
    }

    ctx.fillRect(currentBarOffsetX, initialY + barHeight, histogramWidth, -currentBarHeight);
    ctx.fillStyle = '#000';
    ctx.textBaseline = 'bottom';
    ctx.fillText(Math.round(times[i]), currentBarOffsetX, initialY + barHeight - textIndent - currentBarHeight);
    ctx.textBaseline = 'top';
    ctx.fillText(names[i], currentBarOffsetX, initialY + textIndent + barHeight);
  }
};
