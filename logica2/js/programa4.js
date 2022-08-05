var canvas = document.getElementById("canvas");
var brush = canvas.getContext("2d");
var colorpicker = document.getElementById("colorpicker");
brush.fillStyle = "lightgray";
brush.fillRect(0, 0, 600, 400);

function drawCircle(x, y, radius, color){
    brush.fillStyle = colorpicker.value;
    brush.beginPath();
    brush.arc(x, y, radius, 0, 2 * Math.PI);
    brush.fill();
}
function clearCanvas(){
    brush.clearRect(0, 0, 600, 400);
    brush.fillStyle = "lightgray";
    brush.fillRect(0, 0, 600, 400);
}

var x = 0;
var way = 1;
var radius = 10;
var radiusWay = 1;
function updateScreen(){
    if (x > 600) {
        way = -1;
    } else if (x < 0) {
        way = 1;
    }

    if (radius > 30) {
        radiusWay = -1;
    } else if (radius < 10) {
        radiusWay = 1;
    }
    radius += radiusWay
    clearCanvas();
    drawCircle(x, 20, radius, 'red');
    x += way;
}

setInterval(updateScreen, 20);