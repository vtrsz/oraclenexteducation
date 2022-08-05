function random(num) {
    return Math.round(Math.random() * num)
}
function randomNums(quantity, multiplier) {
    var nums = [];
    for (var i = 0; i < quantity; i++) {
        var randomNum = random(multiplier);
        var existentNum = false;
        if (randomNum !== 0) {
            for (var j = 0; j < nums.length; j++) {
                if (nums[j] == randomNum) {
                    i--;
                    existentNum = true;
                    break;
                }
            }
            if (existentNum == false) {
                nums.push(randomNum);
            }
        } else {
            i--;
        }
    }
    return nums;
}
var secrets = randomNums(3, 10);

var input = document.querySelector("input");
input.focus();
function compare() {
    var find = false;
    for (var i = 0; i < secrets.length; i++) {
        if (input.value == secrets[i]) {
            alert("Parabéns, você acertou!");
            find = true;
            break;
        }
    }
    if (!find) {
        alert("Você errou!");
    }
    input.value = "";
    input.focus();
}
document.querySelector("button").addEventListener("click", compare);