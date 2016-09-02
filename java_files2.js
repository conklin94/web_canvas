var pointX = 300;
var pointY = 150;
var radius = 10

function canvasBackground() {
  my_canvas.style.backgroundColor = document.getElementById('background').value;
}

function drawStar() {
  var c = document.getElementById("my_canvas");
  var ctx = c.getContext("2d");
	var angle = 0;
  ctx.fillStyle = document.getElementById("draw").value;
  ctx.beginPath();
  ctx.moveTo(pointX + (Math.cos((angle - 90) * (Math.PI / 180)) * radius),pointY + (Math.sin((angle - 90) * (Math.PI / 180)) * radius));
  ctx.lineTo(pointX + (Math.cos((angle - 234) * (Math.PI / 180)) * radius),pointY + (Math.sin((angle - 234) * (Math.PI / 180)) * radius));
  ctx.lineTo(pointX + (Math.cos((angle - 378) * (Math.PI / 180)) * radius),pointY + (Math.sin((angle - 378) * (Math.PI / 180)) * radius));
  ctx.lineTo(pointX + (Math.cos((angle - 162) * (Math.PI / 180)) * radius),pointY + (Math.sin((angle - 162) * (Math.PI / 180)) * radius));
  ctx.lineTo(pointX + (Math.cos((angle - 306) * (Math.PI / 180)) * radius),pointY + (Math.sin((angle - 306) * (Math.PI / 180)) * radius));
  ctx.lineTo(pointX + (Math.cos((angle - 90) * (Math.PI / 180)) * radius),pointY + (Math.sin((angle - 90) * (Math.PI / 180)) * radius));
  ctx.closePath();
  ctx.fill();
}

function drawCircle() {
  var c = document.getElementById("my_canvas");
  var ctx = c.getContext("2d");
  ctx.fillStyle = document.getElementById("draw").value;
  ctx.beginPath();
  ctx.arc(pointX,pointY,radius,0,2*Math.PI);
  ctx.fill();
}

function relMouseCoords(event){
    var totalOffsetX = 0;
    var totalOffsetY = 0;
    var canvasX = 0;
    var canvasY = 0;
    var currentElement = document.getElementById("my_canvas");

    do{
        totalOffsetX += currentElement.offsetLeft - currentElement.scrollLeft;
        totalOffsetY += currentElement.offsetTop - currentElement.scrollTop;
    }
    while(currentElement = currentElement.offsetParent)

    canvasX = event.pageX - totalOffsetX;
    canvasY = event.pageY - totalOffsetY;

    return {x:canvasX, y:canvasY}
}

function drawShape() {
  coords = relMouseCoords(event);
  pointX = coords.x;
  pointY = coords.y;
  if (document.getElementById("shape").value == "drawStar()") {
    drawStar();
  } else if (document.getElementById("shape").value == "drawCircle()") {
    drawCircle();
  } else if (document.getElementById("shape").value == "drawSquare()") {
    drawSquare();
  }
}

function changeDiameter() {
  radius = document.getElementById("custom_change").diameter.value / 2;
}

function drawSquare() {
  var c = document.getElementById("my_canvas");
  var ctx = c.getContext("2d");
  ctx.fillStyle = document.getElementById("draw").value;
  ctx.fillRect(pointX - radius, pointY - radius, 2 * radius, 2 * radius)
}