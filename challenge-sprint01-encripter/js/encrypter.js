const encryptButton = document.querySelector("#encrypt");
const decryptButton = document.querySelector("#decrypt");
const copyButton = document.querySelector("#copy");
const copyButtonsDiv = document.querySelector("#btn-actions");
const alert = document.querySelector("#copy-alert");
const input = document.querySelector("#input")
const result = document.querySelector("#output")

function output(text) {
    result.innerHTML = text;
    input.value = "";
    input.focus(); 
}

function encrypt(text) {
    var encrypt = {'a':'ai', 'e':'enter', 'i':'imes', 'o':'ober', 'u':'ufat'};
    var encrypted = text.replace(/[aeiou]/g, m => encrypt[m]);
    output(encrypted);
}

function decrypt(text) {
    var decrypt = {'ai':'a', 'enter':'e', 'imes':'i', 'ober':'o', 'ufat':'u'};
    for (var key in decrypt) {
        if (text.includes(key, 0)) {
            text = text.replace(new RegExp(key, 'g'), decrypt[key]);
        }
    }
    output(text);
}

function showElements() {
    const image = document.getElementById("notfound-img");
    image.style.display = "flex";
    const notfound = document.getElementById("notfound");
    notfound.style.display = "flex";
    const output = document.getElementById("output");
    output.style.display = "none";
    copyButtonsDiv.style.display = "none";
}

function hideElements() {
    alert.style.color = "grey";
    alert.innerHTML = "";
    const image = document.getElementById("notfound-img");
    image.style.display = "none";
    const notfound = document.getElementById("notfound");
    notfound.style.display = "none";
    const output = document.getElementById("output");
    output.style.display = "flex";
    copyButtonsDiv.style.display = "flex";
}

function copyToClipboard() {
    var copyText = result.innerHTML;
    navigator.clipboard.writeText(copyText).then(
        function() {
            alert.style.color = "green";
            alert.innerHTML = "Copiado!";
        }
    )
    .catch(
        function() {
            alert.style.color = "red";
            alert.innerHTML = "Infelizmente não foi possivel copiar";
        }
    );
}

encryptButton.addEventListener("click", () => {
    var text = input.value;
    if (text == "") {
        showElements();
    } else {
        hideElements();
        encrypt(text);
    }
})

decryptButton.addEventListener("click", () => {
    var text = input.value;
    if (text == "") {
        showElements();
    } else {
        hideElements();
        decrypt(text);
    }
})

copyButton.addEventListener("click", () => {
    copyToClipboard();
})