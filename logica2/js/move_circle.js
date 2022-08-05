var canvas = document.querySelector('canvas');
var brush = canvas.getContext('2d');
brush.fillStyle = 'lightgray';
brush.fillRect(0, 0, 600, 400);

var x = 20;
var y = 20;

// códigos do teclado
var left = 37;
var up = 38;
var right = 39;
var down = 40;

// moveTick de incremento
var moveTick = 10;
var radius = 10;
function drawCircle(x, y, raio) {
    brush.fillStyle = 'blue';
    brush.beginPath();
    brush.arc(x, y, raio, 0, 2 * Math.PI);
    brush.fill();
}

function clearCanvas() {
    brush.clearRect(0, 0, 600, 400);
}

function atualizacanvas() {
    clearCanvas();
    drawCircle(x, y, 10);
}

setInterval(atualizacanvas, 20);

function moveCircle(event) {
    if (event.keyCode == left && x > (0 + radius)) {
        x -= moveTick;
    } else if (event.keyCode == up && y > (0 + radius)) {
        y -= moveTick;
    } else if (event.keyCode == right && x < (600 - radius)) {
        x += moveTick;
    } else if (event.keyCode == down && y < (400 - radius)) {
        y += moveTick;
    }
}

document.onkeydown = moveCircle;
