var canvas = document.getElementById("canvasone");
    var brush = canvas.getContext("2d");

    function drawSquare(x, y, width, height, color, colorStroke) {
        if (colorStroke == undefined) { colorStroke = "black"; }
        brush.fillStyle = color;
        brush.fillRect(x, y, width, height);
        brush.fillStroke = colorStroke;
        brush.strokeRect(x, y, width, height)
    }

    for (var x = 0; x < 600; x = x + 50) {
        drawSquare(x, 0, 50, 50, "green");
    }