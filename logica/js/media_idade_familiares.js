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

var familyMembers = parseInt(prompt("Quantidade de familiares?"))
var familyTotalAge = 0;
for (var i = 1; i <= familyMembers; i++) {
    var age = parseInt(prompt("Idade do familiar " + i + "?"));
    familyTotalAge += age;
}
familyMedianAge = familyTotalAge / familyMembers;
show("A idade média da família é " + familyMedianAge);