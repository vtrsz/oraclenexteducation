var canvas = document.querySelector('canvas');
var brush = canvas.getContext('2d');
var radius = 10;

brush.fillStyle = 'lightgray';
brush.fillRect(0, 0, 600, 400);

function drawCircle(x, y, raio, color) {
    brush.fillStyle = color;
    brush.beginPath();
    brush.arc(x, y, raio, 0, 2 * Math.PI);
    brush.fill();
}

function clearCanvas() {
    brush.clearRect(0, 0, 600, 400);
    brush.fillStyle = 'lightgray';
    brush.fillRect(0, 0, 600, 400);
}

function drawTarget(x, y){
    drawCircle(x, y, radius + 20, "red");
    drawCircle(x, y, radius + 10, "white");
    drawCircle(x, y, radius, "red");
}

function randomPosition(min, max) {
    var random = Math.floor(Math.random() * max)
    if ((random + (radius + 20)) >= max) {
        random = max - (radius + 20);
    } else if ((random - (radius + 20)) <= min) {
        random = min + (radius + 20);
    }
    return random;
}

var xRandom;
var yRandom;
function updateScreen(){
    clearCanvas();
    xRandom = randomPosition(0, 600);
    yRandom = randomPosition(0, 400);
    drawTarget(xRandom, yRandom);
}
setInterval(updateScreen, 1000);

function shoot(event){
    var x = event.offsetX;
    var y = event.offsetY;
    var distance = Math.sqrt(Math.pow(x - xRandom, 2) + Math.pow(y - yRandom, 2));
    if(distance < radius){
        alert("Você acertou o alvo!");
    }
}
canvas.onclick = shoot;