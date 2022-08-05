var canvas = document.querySelector('canvas');
var brush = canvas.getContext('2d');

brush.fillStyle = 'lightgray';
brush.fillRect(0, 0, 600, 400);

var radius = 10;

function desenhaCirculo(x, y, radius, cor) {
    brush.fillStyle = cor;
    brush.beginPath();
    brush.arc(x, y, radius, 0, 2 * Math.PI);
    brush.fill();
}

desenhaCirculo(300, 200, radius + 20, 'red'); // maior círculo
desenhaCirculo(300, 200, radius + 10, 'white');
desenhaCirculo(300, 200, radius, 'red'); // menor circulo

function shoot(event) {
    var x = event.pageX - canvas.offsetLeft;
    var y = event.pageY - canvas.offsetTop;
    var distance = Math.sqrt(Math.pow(x - 300, 2) + Math.pow(y - 200, 2));
    if (distance < radius) {
        alert("acertou!");
    }
}

canvas.onclick = shoot;
