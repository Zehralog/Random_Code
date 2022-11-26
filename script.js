var code = document.getElementById("code");

function genCode() {
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var codeLength = 5;
    var code = "CP";

    for (var i = 0; i <= codeLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        code += chars.substring(randomNumber, randomNumber + 1);
    }

    document.getElementById("code").value = code;

}


function copyCode() {
    var copyText = document.getElementById("code");
    copyText.select();
    copyText.setSelectionRange(0, 999);
    document.execCommand("copy");
}

function genClick() {
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var codeLength = 5;
    var code = "CP";

    for (var i = 0; i <= codeLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        code += chars.substring(randomNumber, randomNumber + 1);
    }

    document.getElementById("code").value = code;
}