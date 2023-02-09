/*
La letra "e" es convertida para "enter"
La letra "o" es convertida para "ober"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "u" es convertida para "ufat"
*/

// letra entre dos barras /e/ indica que deben revisarse todas las palabras y afecta todas las letras
// i = para que afecte las mayusculas y las minusculas
// g = tome en cuenta toda la oración
// m = para que afecte multiples lineas

function encriptar() {
    var texto = document.getElementById("input-texto").value.toLowerCase();

var textCifrado = texto.replace(/e/igm, "enter")
var textCifrado = textCifrado.replace(/o/igm, "ober")
var textCifrado = textCifrado.replace(/i/igm, "imes")
var textCifrado = textCifrado.replace(/a/igm, "ai")
var textCifrado = textCifrado.replace(/u/igm, "ufat")

document.getElementById("imgCosito").style.display = "none";
document.getElementById("texto").style.display = "none";
document.getElementById("texto2").innerHTML = textCifrado;
document.getElementById("btnCopiar").style.display = "show";
document.getElementById("btnCopiar").style.display = "inherit";
}

function desencriptar() {
    var texto = document.getElementById("input-texto").value.toLowerCase()
  
var textCifrado = texto.replace(/enter/igm, "e")
var textCifrado = textCifrado.replace(/ober/igm, "o")
var textCifrado = textCifrado.replace(/imes/igm, "i")
var textCifrado = textCifrado.replace(/ai/igm, "a")
var textCifrado = textCifrado.replace(/ufat/igm, "u")

document.getElementById("imgCosito").style.display = "none";
document.getElementById("texto").style.display = "none";
document.getElementById("texto2").innerHTML = textCifrado;
document.getElementById("copiar").style.display = "show";
document.getElementById("copiar").style.display = "inherit";
}

function copiar() {
    var contenido = document.querySelector("#texto2");
        contenido.ariaSelected();
        document.execCommand("copiar");
        alert("¡Se copió!");
}

