var today = new Date();
var year = today.getFullYear();
function show(...args) {
    document.write(...args);
}
function breakLine(lines) {
    if (lines == null) {
        return document.write("<br>");
    }
    for (var i = 1; i <= lines; i++) {
        document.write("<br>");
    }
}
var date = new Date();
var year = date.getFullYear();
var worldCupDate = 1930;
while (worldCupDate <= year) {
    show("Teve copa em " + worldCupDate);
    breakLine(1);
    worldCupDate = worldCupDate + 4;
}
breakLine(2);
show("FIM");