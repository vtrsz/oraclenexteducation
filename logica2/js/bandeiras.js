var flag = ["Brazil", "Germany"]
var index = 0;
var canvas = document.querySelector('canvas');
var brush = canvas.getContext('2d');
drawFlagBrazil();

function drawFlagBrazil() {
    brush.fillStyle = "green";
    brush.fillRect(0, 0, 600, 400);

    brush.fillStyle = "yellow";
    brush.beginPath();
    brush.moveTo(300, 50);
    brush.lineTo(50, 200);
    brush.lineTo(550, 200);
    brush.fill();

    brush.beginPath();
    brush.moveTo(50, 200);
    brush.lineTo(300, 350);
    brush.lineTo(550, 200);
    brush.fill();

    brush.fillStyle = "darkblue";
    brush.beginPath();

    brush.arc(300, 200, 100, 0, 2 * 3.14);
    brush.fill();
}


function drawFlagGermany() {
    brush.fillStyle = 'black';
    brush.fillRect(0, 0, 600, 133);

    brush.fillStyle = 'red';
    brush.fillRect(0, 133, 600, 133);

    brush.fillStyle = 'yellow';
    brush.fillRect(0, 266, 600, 133);
}

function clearCanvas() {
    brush.clearRect(0, 0, 600, 400);
}

function changeFlag(){
    if (index > flag.length - 1) {
        index = 0;
    } else {
        index++;
    }
    clearCanvas();
    if (flag[index] == "Brazil") {
        drawFlagBrazil();
    } else if (flag[index] == "Germany") {
        drawFlagGermany();
    }
}

setInterval(changeFlag, 3000)
