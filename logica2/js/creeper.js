var canvas = document.querySelector('canvas');
var brush = canvas.getContext('2d');

brush.fillStyle = 'darkgreen';
brush.fillRect(200,50,350,300);

brush.fillStyle = 'black';
brush.fillRect(250, 110, 90, 90);
brush.fillRect(410, 110, 90, 90);

brush.fillRect(340, 200, 70, 100);

brush.fillRect(300, 240, 40, 110);
brush.fillRect(410, 240, 40, 110);    
