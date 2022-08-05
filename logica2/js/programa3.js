var canvas = document.getElementById("canvas1");
var brush = canvas.getContext("2d");
var colorPicker = document.getElementById("colorPicker1")
var colorIndex = 0;
var radius = 10;
var draw = false;

brush.fillStyle = "grey";
brush.fillRect(0, 0, 600, 400);

function drawCircle(event) {
    if (draw) {
        var x = event.pageX - canvas.offsetLeft;
        var y = event.pageY - canvas.offsetTop;
        brush.fillStyle = colorPicker.value;
        if (event.shiftKey && radius <= 30) {
            radius += 10;
        } else if (event.altKey && radius >= 15) {
            radius -= 5;
        }

        brush.beginPath();
        brush.arc(x, y, radius, 0, Math.PI * 2, true);
        brush.fill();
    }
}


canvas.onmousemove = drawCircle;

canvas.onmousedown = function (event) {
    console.log(event);
    draw = true;
};

canvas.onmouseup = function () {
    draw = false;
};

canvas.oncontextmenu = function (event) {
    draw = false;
    return false;
};