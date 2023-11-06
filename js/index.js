//Declaro los elementos que necesito usar del HTML
const numero1 = document.getElementById("primerNumero");
const numero2 = document.getElementById("segundoNumero");
const suma = document.getElementById("suma");
const resta = document.getElementById("resta");
const multiplicacion = document.getElementById("multiplicacion");
const division = document.getElementById("division");
const resultado = document.getElementById("resultado");

//Sumo los numeros ingresados y llamo a la funcion para mostrar el resultado
function sumar (a,b,callback){
    let c = a + b;
    callback(c);
}

//Resto los numeros ingresados y llamo a la funcion para mostrar el resultado
function restar (a,b,callback){
    let c = a - b;
    callback(c);
}

//Multiplico los numeros ingresados y llamo a la funcion para mostrar el resultado
function multiplicar (a,b,callback){
    let c = a * b;
    callback(c);
}

//Divido los numeros ingresados y llamo a la funcion para mostrar el resultado
function dividir (a,b,callback){
    let c = a / b;
    callback(c);
}

//Muestro el resultado
function mostrar (c){
    resultado.value = c;
}

//Creo los eventos para los botones de sumar, restar, multiplicar y dividir
suma.addEventListener("click", () => {sumar(Number(primerNumero.value),Number(segundoNumero.value),mostrar)});
resta.addEventListener("click", () => {restar(Number(primerNumero.value),Number(segundoNumero.value),mostrar)});
multiplicacion.addEventListener("click", () => {multiplicar(Number(primerNumero.value),Number(segundoNumero.value),mostrar)});
division.addEventListener("click", () => {dividir(Number(primerNumero.value),Number(segundoNumero.value),mostrar)});