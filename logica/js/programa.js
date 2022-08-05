var today = new Date();
    var year = today.getFullYear();
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

    show("Flávio tem " + (year - 1977) + " anos");
    breakLine();
    show("Joaquim tem " + (year - 1996) + " anos");
    breakLine();
    show("João tem " + (year - 1976) + " anos");

    breakLine(2);

    var flavioAge = (year - 1977);
    var joaquimAge = (year - 1996);
    var joaoAge = (year - 1976);
    var media = flavioAge + joaquimAge + joaoAge / 3;
    show("A media das idades é " + Math.round(media));

    breakLine(2);

    var name = "Flávio";
    show("A idade de " + name + " é " + Math.round(flavioAge));