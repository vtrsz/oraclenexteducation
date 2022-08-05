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

function calculateImc(weight, height){
    var imc = weight / (height * height);
    return imc;
}
var name = prompt("Informe seu nome.")
var Weight = prompt("Informe seu peso.");
var Height = prompt("Informe sua altura.");
var imc = calculateImc(Weight, Height);
show(name + ", o seu IMC é " + imc);

if (imc < 18.5){
    show("Você está abaixo do recomendado.");
} else if (imc >= 18.5 && imc <= 35){
    show("Você está no recomendado.");
} else if (imc > 35) {
    show("Você está acima do recomendado");
}
