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
for (var line = 1; line <= 3; line++) {
    for (var column = 1; column <= 10; column++) {
        document.write("*");
    }
    breakLine();
}