function changeBackground() {
  document.body.style.backgroundColor = document.getElementById('background_color').value
 }
function changeText() {
  document.body.style.color = document.getElementById('text_color').value
}

function changeScript() {
  if (document.getElementById('script').value == 'drawFlag()') {
    drawFlag()
  } else if (document.getElementById('script').value == 'drawBlank()') {
    drawBlank()
  } else if (document.getElementById('script').value == 'drawCheckered()') {
    drawCheckered()
  }
}

function drawFlag() {
  var c = document.getElementById("my_canvas");
  var ctx = c.getContext("2d")
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(0,0,600,300);
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(0,279,600,21);
  ctx.fillRect(0,234,600,21);
  ctx.fillRect(0,186,600,21);
  ctx.fillRect(240,138,360,21);
  ctx.fillRect(240,90,360,21);
  ctx.fillRect(240,45,360,21);
  ctx.fillRect(240,0,360,21);
  ctx.fillStyle = "#0000FF";
  ctx.fillRect(0,0,240,159);

  ctx.fillStyle = '#FFFFFF'
  var pointX = 20;
  var pointY = 15;
  for (var i = 1; i < 31; i++) {
    ctx.fillStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.moveTo(pointX, pointY - 5);
    ctx.lineTo(pointX - 2, pointY);
    ctx.lineTo(pointX - 8, pointY);
    ctx.lineTo(pointX - 3, pointY + 3);
    ctx.lineTo(pointX - 6, pointY + 8);
    ctx.lineTo(pointX, pointY + 5);
    ctx.lineTo(pointX + 6, pointY + 8);
    ctx.lineTo(pointX + 3, pointY + 3);
    ctx.lineTo(pointX + 8, pointY);
    ctx.lineTo(pointX + 2, pointY);
    ctx.lineTo(pointX, pointY - 5);
    ctx.closePath();
    ctx.fill();

  if (i % 6 == 0){
    pointY += 30;
    pointX = 20;
  } else {
    pointX += 40;
  }
  }

  pointX = 40;
  pointY = 30;
  for (var i = 1; i < 21; i++) {
    ctx.fillStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.moveTo(pointX, pointY - 5);
    ctx.lineTo(pointX - 2, pointY);
    ctx.lineTo(pointX - 8, pointY);
    ctx.lineTo(pointX - 3, pointY + 3);
    ctx.lineTo(pointX - 6, pointY + 8);
    ctx.lineTo(pointX, pointY + 5);
    ctx.lineTo(pointX + 6, pointY + 8);
    ctx.lineTo(pointX + 3, pointY + 3);
    ctx.lineTo(pointX + 8, pointY);
    ctx.lineTo(pointX + 2, pointY);
    ctx.lineTo(pointX, pointY - 5);
    ctx.closePath();
    ctx.fill();

  if (i % 5 == 0){
    pointY += 30;
    pointX = 40
  } else {
    pointX += 40;
  }
  }
}

function drawBlank() {
  var c = document.getElementById("my_canvas");
  var ctx = c.getContext("2d")
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(0,0,600,300);
}

function drawCheckered() {
  var c = document.getElementById("my_canvas");
  var ctx = c.getContext("2d")
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(0,0,600,300);
  var yVal = 0;
  var xVal = 0;
  ctx.fillStyle = "#000000"
  for (var i = 1; i < 451; i++) {
    ctx.fillRect(xVal,yVal,10,10);
    if (i % 30 == 0) {
      yVal += 20;
      xVal = 0;
    } else {
      xVal += 20;
    }
  }
  yVal = 10;
  xVal = 10;
  for (var i = 1; i < 451; i++) {
    ctx.fillRect(xVal,yVal,10,10);
    if (i % 30 == 0) {
      yVal += 20;
      xVal = 10;
    } else {
      xVal += 20;
    }
  }
}
