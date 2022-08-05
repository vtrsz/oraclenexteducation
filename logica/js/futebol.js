function show(...args) {
    document.write(...args);
}
function breakLine(lines){
    if (lines == null){
        return document.write("<br>");
    }
    for (var i = 1; i <= lines; i++){
        document.write("<br>");
    }
}
var wins = parseInt(prompt("Entre com o número de vitórias."));
var draws = parseInt(prompt("Entre com o número de empates."));
var points = (wins * 3) + draws;
show("O seu time possui " + points + " pontos.");
breakLine(2);
if (points > 28){
    show("Seu time está melhor do que o ano passado.");
} else if (points < 28) {
    show("Seu time está pior do que o ano passado.");
} else if (points == 28) {
    show("Seu time está igual com o ano passado.");
}
breakLine(2);
show("FIM");