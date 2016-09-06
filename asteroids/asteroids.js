//Takes in the point and angle of the ship, then draws it on the screen
var canvas;
var ctx;
var WIDTH = 600;
var HEIGHT = 600;
var shipPointX = 300;
var shipPointY = 300;
var shipAngle = 0;
var shipDx = 0;
var shipDy = 0;
var animation;
var rockPointX = Math.floor((Math.random() * 600));
var rockPointY = Math.floor((Math.random() * 600));
var rockAngle = Math.floor((Math.random() * 360));
var rockDy = (Math.cos((rockAngle - 90) * (Math.PI / 180)))
var rockDx = (Math.sin((shipAngle - 90) * (Math.PI / 180)))

init();

function init() {
  canvas = document.getElementById("myCanvas");
  ctx = canvas.getContext("2d");
  return animation = setInterval(draw, 10);
}

function draw() {
  clear();
  ctx.fillStyle = "#000000";
  ctx.strokeStyle = "#ffffff"
  rect(0,0,WIDTH,HEIGHT);
  advanceObjects();
  drawShip(shipPointX,shipPointY,shipAngle);
  drawBigRock(rockPointX,rockPointY,rockAngle);
}

function advanceObjects() {
  shipPointX += shipDx;
  shipPointY += shipDy;
  if (shipPointX > 600) {
    shipPointX -= 600;
  }
  if (shipPointY > 600) {
    shipPointY -= 600;
  }
  if (shipPointX < 0) {
    shipPointX += 600;
  }
  if (shipPointY < 0) {
    shipPointY += 600;
  }
  rockPointX += rockDx;
  rockPointY += rockDy;
  rockAngle += 1;
  if (rockPointX > 600) {
    rockPointX -= 600;
  }
  if (rockPointY > 600) {
    rockPointY -= 600;
  }
  if (rockPointX < 0) {
    rockPointX += 600;
  }
  if (rockPointY < 0) {
    rockPointY += 600;
  }
}

function rect(x,y,w,h) {
ctx.beginPath();
ctx.rect(x,y,w,h);
ctx.closePath();
ctx.fill();
ctx.stroke();
}

function clear() {
ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

function doKeyDown(evt){
  switch (evt.keyCode) {
    case 38:  /* Up arrow was pressed */
    shipDx += (Math.cos((shipAngle - 90) * (Math.PI / 180)) * .7);
    shipDy += (Math.sin((shipAngle - 90) * (Math.PI / 180)) * .7);
    break;
    case 40:  /* Down arrow was pressed */
    ;
    break;
    case 37:  /* Left arrow was pressed */
    shipAngle -= 9;
    if (shipAngle < 0) {
      shipAngle += 360;
    }
    break;
    case 39:  /* Right arrow was pressed */
    shipAngle += 9;
    if (shipAngle > 360) {
      shipAngle -= 360;
    }
    break;
  }
}

window.addEventListener('keydown',doKeyDown,true);

function drawShip(pointX,pointY,angle) {
  ctx.strokeStyle = "#ffffff";
 
  ctx.moveTo(pointX + (Math.cos((angle - 90) * (Math.PI / 180)) * 12),pointY + (Math.sin((angle - 90) * (Math.PI / 180)) * 12));
  ctx.lineTo(pointX + (Math.cos((angle + 45) * (Math.PI / 180)) * 15), pointY + (Math.sin((angle + 45) * (Math.PI / 180)) * 15));
  ctx.lineTo(pointX + (Math.cos((angle + 90) * (Math.PI / 180)) * 4),pointY + (Math.sin((angle + 90) * (Math.PI / 180)) * 5));
  ctx.lineTo(pointX + (Math.cos((angle - 45) * (Math.PI / 180)) * -15), pointY + (Math.sin((angle - 45) * (Math.PI / 180)) * -15));
  ctx.lineTo(pointX + (Math.cos((angle - 90) * (Math.PI / 180)) * 12),pointY + (Math.sin((angle - 90) * (Math.PI / 180)) * 12));
  ctx.stroke();
}

function drawBigRock(pointX,pointY,angle) {
  ctx.strokeStyle = "#ffffff"
  ctx.moveTo(pointX + (Math.cos((angle - 90) * (Math.PI / 180)) * 50),pointY + (Math.sin((angle - 90) * (Math.PI / 180)) * 50));
  ctx.lineTo(pointX + (Math.cos((angle - 100) * (Math.PI / 180)) * 45),pointY + (Math.sin((angle - 100) * (Math.PI / 180)) * 45));
  ctx.lineTo(pointX + (Math.cos((angle - 150) * (Math.PI / 180)) * 50),pointY + (Math.sin((angle - 150) * (Math.PI / 180)) * 50));
  ctx.lineTo(pointX + (Math.cos((angle - 180) * (Math.PI / 180)) * 50),pointY + (Math.sin((angle - 180) * (Math.PI / 180)) * 50));
  ctx.lineTo(pointX + (Math.cos((angle - 225) * (Math.PI / 180)) * 50),pointY + (Math.sin((angle - 225) * (Math.PI / 180)) * 50));
  ctx.lineTo(pointX + (Math.cos((angle - 245) * (Math.PI / 180)) * 50),pointY + (Math.sin((angle - 245) * (Math.PI / 180)) * 50));
  ctx.lineTo(pointX + (Math.cos((angle - 235) * (Math.PI / 180)) * 45),pointY + (Math.sin((angle - 235) * (Math.PI / 180)) * 45));
  ctx.lineTo(pointX + (Math.cos((angle - 270) * (Math.PI / 180)) * 50),pointY + (Math.sin((angle - 270) * (Math.PI / 180)) * 50));
  ctx.lineTo(pointX + (Math.cos((angle - 305) * (Math.PI / 180)) * 50),pointY + (Math.sin((angle - 305) * (Math.PI / 180)) * 50));
  ctx.lineTo(pointX + (Math.cos((angle - 315) * (Math.PI / 180)) * 45),pointY + (Math.sin((angle - 315) * (Math.PI / 180)) * 45));
  ctx.lineTo(pointX + (Math.cos((angle - 325) * (Math.PI / 180)) * 50),pointY + (Math.sin((angle - 325) * (Math.PI / 180)) * 50));
  ctx.lineTo(pointX + (Math.cos((angle) * (Math.PI / 180)) * 50),pointY + (Math.sin((angle) * (Math.PI / 180)) * 50));
  ctx.lineTo(pointX + (Math.cos((angle - 25) * (Math.PI / 180)) * 50),pointY + (Math.sin((angle - 25) * (Math.PI / 180)) * 50));
  ctx.lineTo(pointX + (Math.cos((angle - 35) * (Math.PI / 180)) * 40),pointY + (Math.sin((angle - 35) * (Math.PI / 180)) * 40));
  ctx.lineTo(pointX + (Math.cos((angle - 45) * (Math.PI / 180)) * 50),pointY + (Math.sin((angle - 45) * (Math.PI / 180)) * 50));
  ctx.lineTo(pointX + (Math.cos((angle - 90) * (Math.PI / 180)) * 50),pointY + (Math.sin((angle - 90) * (Math.PI / 180)) * 50))
  ctx.stroke();
}

function drawMediumRock(pointX,pointY,angle) {
  ctx.strokeStyle = "#ffffff"
  ctx.moveTo(pointX + (Math.cos((angle - 90) * (Math.PI / 180)) * 25),pointY + (Math.sin((angle - 90) * (Math.PI / 180)) * 25));
  ctx.lineTo(pointX + (Math.cos((angle - 100) * (Math.PI / 180)) * 20),pointY + (Math.sin((angle - 100) * (Math.PI / 180)) * 20));
  ctx.lineTo(pointX + (Math.cos((angle - 150) * (Math.PI / 180)) * 25),pointY + (Math.sin((angle - 150) * (Math.PI / 180)) * 25));
  ctx.lineTo(pointX + (Math.cos((angle - 180) * (Math.PI / 180)) * 25),pointY + (Math.sin((angle - 180) * (Math.PI / 180)) * 25));
  ctx.lineTo(pointX + (Math.cos((angle - 225) * (Math.PI / 180)) * 25),pointY + (Math.sin((angle - 225) * (Math.PI / 180)) * 25));
  ctx.lineTo(pointX + (Math.cos((angle - 245) * (Math.PI / 180)) * 25),pointY + (Math.sin((angle - 245) * (Math.PI / 180)) * 25));
  ctx.lineTo(pointX + (Math.cos((angle - 235) * (Math.PI / 180)) * 20),pointY + (Math.sin((angle - 235) * (Math.PI / 180)) * 20));
  ctx.lineTo(pointX + (Math.cos((angle - 270) * (Math.PI / 180)) * 25),pointY + (Math.sin((angle - 270) * (Math.PI / 180)) * 25));
  ctx.lineTo(pointX + (Math.cos((angle - 305) * (Math.PI / 180)) * 25),pointY + (Math.sin((angle - 305) * (Math.PI / 180)) * 25));
  ctx.lineTo(pointX + (Math.cos((angle - 315) * (Math.PI / 180)) * 20),pointY + (Math.sin((angle - 315) * (Math.PI / 180)) * 20));
  ctx.lineTo(pointX + (Math.cos((angle - 325) * (Math.PI / 180)) * 25),pointY + (Math.sin((angle - 325) * (Math.PI / 180)) * 25));
  ctx.lineTo(pointX + (Math.cos((angle) * (Math.PI / 180)) * 25),pointY + (Math.sin((angle) * (Math.PI / 180)) * 25));
  ctx.lineTo(pointX + (Math.cos((angle - 25) * (Math.PI / 180)) * 25),pointY + (Math.sin((angle - 25) * (Math.PI / 180)) * 25));
  ctx.lineTo(pointX + (Math.cos((angle - 35) * (Math.PI / 180)) * 17),pointY + (Math.sin((angle - 35) * (Math.PI / 180)) * 17));
  ctx.lineTo(pointX + (Math.cos((angle - 45) * (Math.PI / 180)) * 25),pointY + (Math.sin((angle - 45) * (Math.PI / 180)) * 25));
  ctx.lineTo(pointX + (Math.cos((angle - 90) * (Math.PI / 180)) * 25),pointY + (Math.sin((angle - 90) * (Math.PI / 180)) * 25))
  ctx.stroke();
}

function drawSmallRock(pointX,pointY,angle) {
  ctx.strokeStyle = "#ffffff"
  ctx.moveTo(pointX + (Math.cos((angle - 90) * (Math.PI / 180)) * 12),pointY + (Math.sin((angle - 90) * (Math.PI / 180)) * 12));
  ctx.lineTo(pointX + (Math.cos((angle - 100) * (Math.PI / 180)) * 10),pointY + (Math.sin((angle - 100) * (Math.PI / 180)) * 10));
  ctx.lineTo(pointX + (Math.cos((angle - 150) * (Math.PI / 180)) * 12),pointY + (Math.sin((angle - 150) * (Math.PI / 180)) * 12));
  ctx.lineTo(pointX + (Math.cos((angle - 180) * (Math.PI / 180)) * 12),pointY + (Math.sin((angle - 180) * (Math.PI / 180)) * 12));
  ctx.lineTo(pointX + (Math.cos((angle - 225) * (Math.PI / 180)) * 12),pointY + (Math.sin((angle - 225) * (Math.PI / 180)) * 12));
  ctx.lineTo(pointX + (Math.cos((angle - 245) * (Math.PI / 180)) * 12),pointY + (Math.sin((angle - 245) * (Math.PI / 180)) * 12));
  ctx.lineTo(pointX + (Math.cos((angle - 235) * (Math.PI / 180)) * 10),pointY + (Math.sin((angle - 235) * (Math.PI / 180)) * 12));
  ctx.lineTo(pointX + (Math.cos((angle - 270) * (Math.PI / 180)) * 12),pointY + (Math.sin((angle - 270) * (Math.PI / 180)) * 12));
  ctx.lineTo(pointX + (Math.cos((angle - 305) * (Math.PI / 180)) * 12),pointY + (Math.sin((angle - 305) * (Math.PI / 180)) * 12));
  ctx.lineTo(pointX + (Math.cos((angle - 315) * (Math.PI / 180)) * 10),pointY + (Math.sin((angle - 315) * (Math.PI / 180)) * 10));
  ctx.lineTo(pointX + (Math.cos((angle - 325) * (Math.PI / 180)) * 12),pointY + (Math.sin((angle - 325) * (Math.PI / 180)) * 12));
  ctx.lineTo(pointX + (Math.cos((angle) * (Math.PI / 180)) * 12),pointY + (Math.sin((angle) * (Math.PI / 180)) * 12));
  ctx.lineTo(pointX + (Math.cos((angle - 25) * (Math.PI / 180)) * 12),pointY + (Math.sin((angle - 25) * (Math.PI / 180)) * 12));
  ctx.lineTo(pointX + (Math.cos((angle - 35) * (Math.PI / 180)) * 8),pointY + (Math.sin((angle - 35) * (Math.PI / 180)) * 8));
  ctx.lineTo(pointX + (Math.cos((angle - 45) * (Math.PI / 180)) * 12),pointY + (Math.sin((angle - 45) * (Math.PI / 180)) * 12));
  ctx.lineTo(pointX + (Math.cos((angle - 90) * (Math.PI / 180)) * 12),pointY + (Math.sin((angle - 90) * (Math.PI / 180)) * 12))
  ctx.stroke();
}

function drawBullet(pointX,pointY) {
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(pointX - 1,pointY - 1,2,2);
}