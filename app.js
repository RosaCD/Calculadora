// Estructuras de control
// Condicionales y ciclos (while, do while, for)

// Indice; condicional; incremento o decremento
// for (let index = 1; index <= 5; index++) {
//     if (index==3) {
//     continue;
//     }
//     console.log(index);
//     debugger;
// }
// console.log("Termino el ciclo");
// Funciones

function suma() {
    let x = parseFloat(document.getElementById("numero1").value);
    let y = parseFloat(document.getElementById("numero2").value);
    let resultado = x+y;
    console.log(resultado);
}
function resta() {
    let x = parseFloat(document.getElementById("numero1").value);
    let y = parseFloat(document.getElementById("numero2").value);
    let resultado = x-y;
    console.log(resultado);
}
function multiplicacion() {
    let x = parseFloat(document.getElementById("numero1").value);
    let y = parseFloat(document.getElementById("numero2").value);
    let resultado = x*y;
    console.log(resultado);
}
function division() {
    let x = parseFloat(document.getElementById("numero1").value);
    let y = parseFloat(document.getElementById("numero2").value);
    let resultado = x/y;
    console.log(resultado);
}
// suma (5,6);
// console.log("La suma es = " + resultado);