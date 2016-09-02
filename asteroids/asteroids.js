//Takes in the point and angle of the ship, then draws it on the screen
var pointX = 300;
var pointY = 300;
var angle = 0;

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.fillStyle = "#000000";
ctx.fillRect(0,0,600,600);

drawShip();

pointX = 200;
pointY = 200;
angle = 0;

drawBigRock();

pointX = 400;
pointY = 200;
angle = 180;

drawMediumRock();

pointX = 500;
pointY = 400;
angle = 45;

drawSmallRock();

pointX = 200;
pointY = 400;
angle = 215;

drawShip();

pointX = 300;
pointY = 400;
angle = 200;

drawBigRock();

pointX = 100;
pointY = 300;
angle = 45;

drawMediumRock();

pointX = 300;
pointY = 250;

drawBullet();

pointY = 225;

drawBullet();

pointY = 200;

drawBullet();

pointY = 175;

drawBullet();

pointX = 550;
pointY = 50;

drawBigRock();

function drawShip() {
  ctx.fillRect(0,0,600,600);
  ctx.strokeStyle = "#ffffff";
 
  ctx.moveTo(pointX + (Math.cos((angle - 90) * (Math.PI / 180)) * 12),pointY + (Math.sin((angle - 90) * (Math.PI / 180)) * 12));
  ctx.lineTo(pointX + (Math.cos((angle + 45) * (Math.PI / 180)) * 15), pointY + (Math.sin((angle + 45) * (Math.PI / 180)) * 15));
  ctx.lineTo(pointX + (Math.cos((angle + 90) * (Math.PI / 180)) * 4),pointY + (Math.sin((angle + 90) * (Math.PI / 180)) * 5));
  ctx.lineTo(pointX + (Math.cos((angle - 45) * (Math.PI / 180)) * -15), pointY + (Math.sin((angle - 45) * (Math.PI / 180)) * -15));
  ctx.lineTo(pointX + (Math.cos((angle - 90) * (Math.PI / 180)) * 12),pointY + (Math.sin((angle - 90) * (Math.PI / 180)) * 12));
  ctx.stroke();
}

function drawBigRock() {
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

function drawMediumRock() {
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

function drawSmallRock() {
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

function drawBullet() {
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(pointX - 1,pointY - 1,2,2);
}