function drawSquare(x, y, size, color) {
    brush.fillStyle = color;
    brush.fillRect(x, y, size, size)
    brush.fill();
}

function drawCircle(x, y, radius, color) {
    brush.fillStyle = color;
    brush.beginPath();
    brush.arc(x, y, radius, 0, 2 * 3.14);
    brush.fill();
}

function drawColorPalletes() {
    drawSquare(xRed, ySquare, squareSize, 'red');
    drawSquare(xGreen, ySquare, squareSize, 'green');
    drawSquare(xBlue, ySquare, squareSize, 'blue');
}

function canDraw(x, y){
    if (x >= 0 && x < 3*squareSize && y >= 0 && y < squareSize)
        return false;
    else {
        return true;
    }
}

function handleMouseMovement(event) {
    var x = event.pageX - canvas.offsetLeft;
    var y = event.pageY - canvas.offsetTop;
    if (draw && canDraw(x, y)) {
        drawCircle(x, y, 5, actualColor);
    }
}

function selectColor(event){
    var x = event.pageX - canvas.offsetLeft;
    var y = event.pageY - canvas.offsetTop;
    if (x > xRed && x < xRed + squareSize && y > ySquare && y < ySquare + squareSize) {
        actualColor = 'red';
    } else if (x > xGreen && x < xGreen + squareSize && y > ySquare && y < ySquare + squareSize) {
        actualColor = 'green';
    } else if (x > xBlue && x < xBlue + squareSize && y > ySquare && y < ySquare + squareSize) {
        actualColor = 'blue';
    }
}

function enableDraw() {
    draw = true;
}

function disableDraw() {
    draw = false;
}

var canvas = document.getElementById('canvas');
var brush = canvas.getContext('2d');
brush.fillStyle = 'lightgray';
brush.fillRect(0, 0, 600, 400);

var draw = false;
var actualColor = 'blue';
var xRed = 0;
var xGreen = 50;
var xBlue = 100;
var ySquare = 0;
var squareSize = 50;

drawColorPalletes(); // mostra os quadrados de seleção de colores

canvas.onmousemove = handleMouseMovement;

canvas.onmousedown = enableDraw;

canvas.onmouseup = disableDraw;

canvas.onclick = selectColor;

canvas.oncontextmenu = function(event){
    return false;
};
