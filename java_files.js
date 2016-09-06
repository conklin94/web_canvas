var animation;

function changeBackground() {
  document.body.style.backgroundColor = document.getElementById('background_color').value
 }
function changeText() {
  document.body.style.color = document.getElementById('text_color').value
}

function changeColor() {
  document.body.style.backgroundColor = document.getElementById('custom_change').Background.value
  document.body.style.color = document.getElementById('custom_change').Text.value
}

function changeScript() {
  clearInterval(animation);
  if (document.getElementById('script').value == 'drawFlag()') {
    drawFlag();
  } else if (document.getElementById('script').value == 'drawBlank()') {
    drawBlank();
  } else if (document.getElementById('script').value == 'drawCheckered()') {
    drawCheckered();
  } else if (document.getElementById('script').value == 'drawJapaneseFlag()') {
    drawJapaneseFlag();
  } else if (document.getElementById('script').value == 'drawGradient()') {
    drawGradient();
  } else if (document.getElementById('script').value == 'helloWorld()') {
    helloWorld();
  } else if (document.getElementById('script').value == 'drawClock()') {
    animation = setInterval(drawClock,100);
  } else if (document.getElementById('script').value == 'drawBlack()') {
    drawBlack();
  } else if (document.getElementById('script').value == 'drawBritishFlag()') {
    drawBritishFlag();
  } else if (document.getElementById('script').value == 'drawGermanFlag()') {
    drawGermanFlag();
  } else if (document.getElementById('script').value == 'rotatingStar()') {
    animation = setInterval(rotatingStar,10);
  } else if (document.getElementById('script').value == 'rotatingLine()') {
    animation = setInterval(rotatingLine,1);
  } else if (document.getElementById('script').value == 'movingBall()') {
    animation = setInterval(movingBall,50);
  } else if (document.getElementById('script').value == 'fallingStar()') {
    animation = setInterval(fallingStar,10);
  } else if (document.getElementById('script').value == 'init()') {
    init();
  } else if (document.getElementById('script').value == 'bouncingBall()') {
    animation = setInterval(bouncingBall,5);
  }
}

function drawFlag() {
  var c = document.getElementById("my_canvas");
  var ctx = c.getContext("2d")
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(0,0,600,300);
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(0,277,600,23);
  ctx.fillRect(0,231,600,23);
  ctx.fillRect(0,185,600,23);
  ctx.fillRect(240,139,360,23);
  ctx.fillRect(240,93,360,23);
  ctx.fillRect(240,47,360,23);
  ctx.fillRect(240,0,360,23);
  ctx.fillStyle = "#0000FF";
  ctx.fillRect(0,0,240,162);

  ctx.fillStyle = '#FFFFFF'
  var pointX = 20;
  var pointY = 15;
  for (var i = 1; i < 31; i++) {
    var angle = 0;
    ctx.fillStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.moveTo(pointX + (Math.cos((angle - 90) * (Math.PI / 180)) * 8),pointY + (Math.sin((angle - 90) * (Math.PI / 180)) * 8));
    ctx.lineTo(pointX + (Math.cos((angle - 234) * (Math.PI / 180)) * 8),pointY + (Math.sin((angle - 234) * (Math.PI / 180)) * 8));
    ctx.lineTo(pointX + (Math.cos((angle - 378) * (Math.PI / 180)) * 8),pointY + (Math.sin((angle - 378) * (Math.PI / 180)) * 8));
    ctx.lineTo(pointX + (Math.cos((angle - 162) * (Math.PI / 180)) * 8),pointY + (Math.sin((angle - 162) * (Math.PI / 180)) * 8));
    ctx.lineTo(pointX + (Math.cos((angle - 306) * (Math.PI / 180)) * 8),pointY + (Math.sin((angle - 306) * (Math.PI / 180)) * 8));
    ctx.lineTo(pointX + (Math.cos((angle - 90) * (Math.PI / 180)) * 8),pointY + (Math.sin((angle - 90) * (Math.PI / 180)) * 8));
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
    var angle = 0;
    ctx.fillStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.moveTo(pointX + (Math.cos((angle - 90) * (Math.PI / 180)) * 8),pointY + (Math.sin((angle - 90) * (Math.PI / 180)) * 8));
    ctx.lineTo(pointX + (Math.cos((angle - 234) * (Math.PI / 180)) * 8),pointY + (Math.sin((angle - 234) * (Math.PI / 180)) * 8));
    ctx.lineTo(pointX + (Math.cos((angle - 378) * (Math.PI / 180)) * 8),pointY + (Math.sin((angle - 378) * (Math.PI / 180)) * 8));
    ctx.lineTo(pointX + (Math.cos((angle - 162) * (Math.PI / 180)) * 8),pointY + (Math.sin((angle - 162) * (Math.PI / 180)) * 8));
    ctx.lineTo(pointX + (Math.cos((angle - 306) * (Math.PI / 180)) * 8),pointY + (Math.sin((angle - 306) * (Math.PI / 180)) * 8));
    ctx.lineTo(pointX + (Math.cos((angle - 90) * (Math.PI / 180)) * 8),pointY + (Math.sin((angle - 90) * (Math.PI / 180)) * 8));
    ctx.closePath();
    ctx.fill();

  if (i % 5 == 0){
    pointY += 30;
    pointX = 40;
  } else {
    pointX += 40;
  }
  }
}

function drawBlank() {
  var c = document.getElementById("my_canvas");
  var ctx = c.getContext("2d");
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(0,0,600,300);
}

function drawCheckered() {
  var c = document.getElementById("my_canvas");
  var ctx = c.getContext("2d");
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

function drawJapaneseFlag() {
  var c = document.getElementById("my_canvas");
  var ctx = c.getContext("2d")
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(0,0,600,300);
  ctx.fillStyle = "#FF0000"
  ctx.beginPath();
  ctx.arc(300,150,80,0,2*Math.PI);
  ctx.fill();
}

function drawGradient() {
  var c = document.getElementById("my_canvas");
  var ctx = c.getContext("2d");
  var grd = ctx.createLinearGradient(0,0,600,0);
  grd.addColorStop(0,"red");
  grd.addColorStop(1,"yellow");
  // Fill with gradient
  ctx.fillStyle = grd;
  ctx.fillRect(0,0,600,300);
}

function helloWorld() {
  var c = document.getElementById("my_canvas");
  var ctx = c.getContext("2d")
  ctx.fillStyle = "#000000"
  ctx.font = "60px Comic Sans MS";
  ctx.textAlign = "center";
  ctx.fillText("Hello World", my_canvas.width / 2, my_canvas.height / 2);

}

function drawClock() {
  var canvas = document.getElementById("my_canvas");
  var ctx = canvas.getContext("2d");
  ctx.save();
  var radius = canvas.height / 2;
  ctx.translate(2 * radius, radius);
  radius = radius * 0.90
  
  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
  drawTime(ctx, radius);

  ctx.restore();
}

function drawFace(ctx, radius) {
  var grad;
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2*Math.PI);
  ctx.fillStyle = 'white';
  ctx.fill();
  grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
  grad.addColorStop(0, '#333');
  grad.addColorStop(0.5, 'white');
  grad.addColorStop(1, '#333');
  ctx.strokeStyle = grad;
  ctx.lineWidth = radius*0.1;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
  ctx.fillStyle = '#333';
  ctx.fill();
}

function drawNumbers(ctx, radius) {
  var ang;
  var num;
  ctx.font = radius*0.15 + "px arial";
  ctx.textBaseline="middle";
  ctx.textAlign="center";
  for(num = 1; num < 13; num++){
    ang = num * Math.PI / 6;
    ctx.rotate(ang);
    ctx.translate(0, -radius*0.85);
    ctx.rotate(-ang);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius*0.85);
    ctx.rotate(-ang);
  }
}

function drawTime(ctx, radius){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    //hour
    hour=hour%12;
    hour=(hour*Math.PI/6)+
    (minute*Math.PI/(6*60))+
    (second*Math.PI/(360*60));
    drawHand(ctx, hour, radius*0.5, radius*0.07);
    //minute
    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawHand(ctx, minute, radius*0.8, radius*0.07);
    // second
    second=(second*Math.PI/30);
    drawHand(ctx, second, radius*0.9, radius*0.02);
}

function drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}

function drawBlack() {
  var c = document.getElementById("my_canvas");
  var ctx = c.getContext("2d");
  ctx.fillStyle = "#000000";
  ctx.fillRect(0,0,600,300);
}

function drawBritishFlag() {
  var c = document.getElementById("my_canvas");
  var ctx = c.getContext("2d");
  
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(0,0,600,300);
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(270,0,60,300);
  ctx.fillRect(0,120,600,60);

  ctx.beginPath();
  ctx.moveTo(0,0);
  ctx.lineTo(265,115);
  ctx.lineTo(240,115);
  ctx.lineTo(0,12);
  ctx.closePath();
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(600,0);
  ctx.lineTo(335,115);
  ctx.lineTo(360,115);
  ctx.lineTo(600,12);
  ctx.closePath();
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(0,300);
  ctx.lineTo(265,185);
  ctx.lineTo(240,185);
  ctx.lineTo(0,288);
  ctx.closePath();
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(600,300);
  ctx.lineTo(335,185);
  ctx.lineTo(360,185);
  ctx.lineTo(600,288);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "#0000ff";

  ctx.beginPath();
  ctx.moveTo(0,20);
  ctx.lineTo(225,115);
  ctx.lineTo(0,115);
  ctx.closePath();
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(600,20);
  ctx.lineTo(375,115);
  ctx.lineTo(600,115);
  ctx.closePath();
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(0,280);
  ctx.lineTo(225,185);
  ctx.lineTo(0,185);
  ctx.closePath();
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(600,280);
  ctx.lineTo(375,185);
  ctx.lineTo(600,185);
  ctx.closePath();
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(10,0);
  ctx.lineTo(265,0);
  ctx.lineTo(265,110);
  ctx.closePath();
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(590,0);
  ctx.lineTo(335,0);
  ctx.lineTo(335,110);
  ctx.closePath();
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(10,300);
  ctx.lineTo(265,300);
  ctx.lineTo(265,190);
  ctx.closePath();
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(590,300);
  ctx.lineTo(335,300);
  ctx.lineTo(335,190);
  ctx.closePath();
  ctx.fill();

}

function drawGermanFlag() {
  var c = document.getElementById("my_canvas");
  var ctx = c.getContext("2d");
  
  ctx.fillStyle = "#000000";
  ctx.fillRect(0,0,600,100);

  ctx.fillStyle = "#FF0000";
  ctx.fillRect(0,100,600,100)

  ctx.fillStyle = "#FFFF00";
  ctx.fillRect(0,200,600,100)
}

var starAngle = 0
function rotatingStar() {
  var c = document.getElementById("my_canvas");
  var ctx = c.getContext("2d");

  if (starAngle > 360) {
    starAngle -= 360;
  }

  starAngle += 1;
  var angle = starAngle;
  
  var pointX = 300;
  var pointY = 150;
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0,0,600,300);
  ctx.fillStyle = "#FF0000";
  ctx.beginPath();
  ctx.moveTo(pointX + (Math.cos((angle - 90) * (Math.PI / 180)) * 50),pointY + (Math.sin((angle - 90) * (Math.PI / 180)) * 50));
  ctx.lineTo(pointX + (Math.cos((angle - 234) * (Math.PI / 180)) * 50),pointY + (Math.sin((angle - 234) * (Math.PI / 180)) * 50));
  ctx.lineTo(pointX + (Math.cos((angle - 378) * (Math.PI / 180)) * 50),pointY + (Math.sin((angle - 378) * (Math.PI / 180)) * 50));
  ctx.lineTo(pointX + (Math.cos((angle - 162) * (Math.PI / 180)) * 50),pointY + (Math.sin((angle - 162) * (Math.PI / 180)) * 50));
  ctx.lineTo(pointX + (Math.cos((angle - 306) * (Math.PI / 180)) * 50),pointY + (Math.sin((angle - 306) * (Math.PI / 180)) * 50));
  ctx.lineTo(pointX + (Math.cos((angle - 90) * (Math.PI / 180)) * 50),pointY + (Math.sin((angle - 90) * (Math.PI / 180)) * 50));
  ctx.closePath();
  ctx.fill();
}

var ballPointX = 300;
var ballPointY = 150;

function movingBall() {
  var c = document.getElementById("my_canvas");
  var ctx = c.getContext("2d")
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(0,0,600,300)
  ctx.fillStyle = "#ff0000"
  ctx.beginPath();
  ctx.arc(ballPointX,ballPointY,30,0,2*Math.PI);
  ctx.fill();

  var negative = 0;
  negative = Math.floor((Math.random() * 100) + 1);
  if (negative > 50) {
     ballPointX += Math.floor((Math.random() * 10) + 1) *-1;
  } else {
     ballPointX += Math.floor((Math.random() * 10) + 1);
  }

  negative = Math.floor((Math.random() * 100) + 1);
  if (negative > 50) {
     ballPointY += Math.floor((Math.random() * 10) + 1) *-1;
  } else {
     ballPointY += Math.floor((Math.random() * 10) + 1);
  }

  if (ballPointX > 600) {
    ballPointX -= 600;
  }
  if (ballPointY > 300) {
    ballPointY -= 300;
  }
  if (ballPointX < 0) {
    ballPointX += 600;
  }
  if (ballPointY < 0) {
    ballPointY += 300;
  }
}

function rotatingLine() {
  var c = document.getElementById("my_canvas");
  var ctx = c.getContext("2d");
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0,0,600,300);
  ctx.strokeStyle = "#000000";
  var pointX = 300;
  var pointY = 150;
  if (starAngle > 360) {
    starAngle -= 360;
  }
  starAngle += 9;
  var angle = starAngle;
  ctx.beginPath();
  ctx.moveTo(pointX + (Math.cos((angle) * (Math.PI / 180)) * 150),pointY + (Math.sin((angle) * (Math.PI / 180)) * 150));
  ctx.lineTo(pointX + (Math.cos((angle + 180) * (Math.PI / 180)) * 150),pointY + (Math.sin((angle + 180) * (Math.PI / 180)) * 150));
  ctx.closePath();
  ctx.stroke();
}

var starPointX = 300;
var starPointY = 150;
var velX = 1;
var velY = 1;
var velSpin = 1;

function fallingStar() {
  var c = document.getElementById("my_canvas");
  var ctx = c.getContext("2d");

  if (starAngle > 360) {
    starAngle -= 360;
  }

  starAngle += velSpin;
  var angle = starAngle;
  
  var pointX = starPointX;
  var pointY = starPointY;
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0,0,600,300);
  ctx.fillStyle = "#FF0000";
  ctx.beginPath();
  ctx.moveTo(pointX + (Math.cos((angle - 90) * (Math.PI / 180)) * 50),pointY + (Math.sin((angle - 90) * (Math.PI / 180)) * 50));
  ctx.lineTo(pointX + (Math.cos((angle - 234) * (Math.PI / 180)) * 50),pointY + (Math.sin((angle - 234) * (Math.PI / 180)) * 50));
  ctx.lineTo(pointX + (Math.cos((angle - 378) * (Math.PI / 180)) * 50),pointY + (Math.sin((angle - 378) * (Math.PI / 180)) * 50));
  ctx.lineTo(pointX + (Math.cos((angle - 162) * (Math.PI / 180)) * 50),pointY + (Math.sin((angle - 162) * (Math.PI / 180)) * 50));
  ctx.lineTo(pointX + (Math.cos((angle - 306) * (Math.PI / 180)) * 50),pointY + (Math.sin((angle - 306) * (Math.PI / 180)) * 50));
  ctx.lineTo(pointX + (Math.cos((angle - 90) * (Math.PI / 180)) * 50),pointY + (Math.sin((angle - 90) * (Math.PI / 180)) * 50));
  ctx.closePath();
  ctx.fill();

  starPointX += velX;
  starPointY += velY;
  if (starPointX > 600) {
    starPointX -= 600;
    velX = Math.floor((Math.random() * 10) + 1);
    velY = Math.floor((Math.random() * 10) + 1);
    velSpin = Math.floor((Math.random() * 10) + 1);
  }
  if (starPointY > 300) {
    starPointY -= 300;
    velX = Math.floor((Math.random() * 10) + 1);
    velY = Math.floor((Math.random() * 10) + 1);
    velSpin = Math.floor((Math.random() * 10) + 1);
  }

}

var ballVelX = 1;
var ballVelY = 3;

function bouncingBall() {
  var c = document.getElementById("my_canvas");
  var ctx = c.getContext("2d")
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(0,0,600,300)
  ctx.fillStyle = "#ff0000"
  ctx.beginPath();
  ctx.arc(ballPointX,ballPointY,30,0,2*Math.PI);
  ctx.fill();
  ballPointX += ballVelX;
  ballPointY += ballVelY;
  if (ballPointX > 600) {
    ballPointX = 600;
    ballVelX *= -1;
  }
  if (ballPointY > 300) {
    ballPointY = 300;
    ballVelY *= -1;
  }
  if (ballPointX < 0) {
    ballPointX = 0;
    ballVelX *= -1;
  }
  if (ballPointY < 0) {
    ballPointY = 0;
    ballVelY *= -1;
  }
}

// Added stuff for moving an object
var canvas
var ctx;
var dx = 5;
var dy = 5;
var x = 300;
var y = 150;
var WIDTH = 600;
var HEIGHT = 300;

function circle(x,y,r) {
ctx.beginPath();
ctx.arc(x, y, r, 0, Math.PI*2, true);
ctx.fill();
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

function init() {
canvas = document.getElementById("my_canvas");
ctx = canvas.getContext("2d");
return animation = setInterval(draw, 10);
}

function doKeyDown(evt){
switch (evt.keyCode) {
case 38:  /* Up arrow was pressed */
if (y - dy > 0){
y -= dy;
}
break;
case 40:  /* Down arrow was pressed */
if (y + dy < HEIGHT){
y += dy;
}
break;
case 37:  /* Left arrow was pressed */
if (x - dx > 0){
x -= dx;
}
break;
case 39:  /* Right arrow was pressed */
if (x + dx < WIDTH){
x += dx;
}
break;
}
}

function draw() {
clear();
ctx.fillStyle = "white";
ctx.strokeStyle = "black";
rect(0,0,WIDTH,HEIGHT);
ctx.fillStyle = "purple";
circle(x, y, 10);
}

window.addEventListener('keydown',doKeyDown,true);