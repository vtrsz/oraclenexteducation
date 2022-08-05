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

for (var multiplier = 1; multiplier <= 10; multiplier++) {
    show(7 * multiplier);
    multiplier++;
}

var total = 0;
total++;

breakLine();
show("FIM");