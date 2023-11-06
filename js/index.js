const numero1 = document.getElementById("primerNumero");
const numero2 = document.getElementById("segundoNumero");
const suma = document.getElementById("suma");
const resta = document.getElementById("resta");
const multiplicacion = document.getElementById("multiplicacion");
const division = document.getElementById("division");
const resultado = document.getElementById("resultado");

function sumar (a,b,callback){
    let c = a + b;
    callback(c);
}

function restar (a,b,callback){
    let c = a - b;
    callback(c);
}

function multiplicar (a,b,callback){
    let c = a * b;
    callback(c);
}

function dividir (a,b,callback){
    let c = a / b;
    callback(c);
}

function mostrar (c){
    resultado.value = c;
}

suma.addEventListener("click", () => {sumar(Number(primerNumero.value),Number(segundoNumero.value),mostrar)});
resta.addEventListener("click", () => {restar(Number(primerNumero.value),Number(segundoNumero.value),mostrar)});
multiplicacion.addEventListener("click", () => {multiplicar(Number(primerNumero.value),Number(segundoNumero.value),mostrar)});
division.addEventListener("click", () => {dividir(Number(primerNumero.value),Number(segundoNumero.value),mostrar)});