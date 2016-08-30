drawShip();

//Takes in the point and angle of the ship, then draws it on the screen
function drawShip() {
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  var pointX = 300;
  var pointY = 300;
  ctx.fillStyle = "#000000";
  ctx.fillRect(0,0,600,600);
  ctx.strokeStyle = "#ffffff";
  // angle = 0, pointX = 300, pointY = 300
  ctx.moveTo(pointX,pointY - 12);
  ctx.lineTo(pointX + 10, pointY + 8);
  ctx.lineTo(pointX,pointY + 4);
  ctx.lineTo(pointX - 10,pointY + 8);
  ctx.lineTo(pointX,pointY - 12);
  ctx.stroke();

  pointX = 100;
  pointY = 200;
  // angle = 90, pointX = 200, pointY = 200
  ctx.moveTo(pointX + 12,pointY);
  ctx.lineTo(pointX - 8, pointY + 10);
  ctx.lineTo(pointX - 4,pointY);
  ctx.lineTo(pointX - 8,pointY - 10);
  ctx.lineTo(pointX + 12,pointY);
  ctx.stroke();
}