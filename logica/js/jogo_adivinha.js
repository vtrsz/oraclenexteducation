function show(...args) {
    document.write(...args);
    breakLine();
}
function breakLine(lines){
    if (lines == null){
        return document.write("<br>");
    }
    for (var i = 1; i <= lines; i++){
        document.write("<br>");
    }
}

var randomNumber = Math.floor(Math.random() * 10) + 1;
for (var tries = 1; tries <= 3; tries++) {
    var chute = parseInt(prompt("Digite seu chute"));
    if (chute == randomNumber){
        show("Você acertou!")
        break;
    } else if (tries == 3) {
        show("Você errou! Número pensado: " + randomNumber);
    } else {
        show("Você errou! Tente novamente!");
    }
}
breakLine();
show("FIM");