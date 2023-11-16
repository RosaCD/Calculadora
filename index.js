// function suma (a,b,c){
//     return a+b+c;
// }
// const numero = [5,6,7];
// let resultadodefuncion = suma (...numero);
// console.log(resultadodefuncion);

// Funcion anonima

// let suma = function (a,b) {return a+b};
// console.log(suma(2,3));

// function funcionsaludar (nombre){
//     console.log("Hola " + nombre + " desde una funcion vanilla");
// }
// funcionsaludar ("Rosa");

// let hola = function (nombre){
//     console.log("Hola "+ nombre + " mundo anonima");
// };

// hola ("Rosa");

// let holaArrow = (nombre) => console.log("Hola "+ nombre + " desde una funcion flecha");
// holaArrow ("Rosa");

// //arrow function, funciones flecha, funciones lambda, fat arrow

// function callbackRosa (a,b, function saludo(){
//     console.log("Hola Rosa");}){

// }
// let boton = document.querySelector('.botonClick');

// let boton = document.querySelector('.botonClick');
// boton.addEventListener('click', function(){
//     console.log("Dimos click al boton");
//     boton.classList.toggle("morado");
// });


// let boton = document.querySelector('.botonClick');

// boton.addEventListener('mouseover', function(){
//     console.log("Estamos sobre del boton");
//     boton.classList.toggle ("morado")
// });

// boton.addEventListener('mouseout', function(){
//     console.log("Estamos fuera del boton");
//     boton.classList.toggle ("morado")
// });

// // Eventos de teclado

// window.addEventListener("keypress", (e) => {
//     console.log("Presione una tecla");
//     // console.log(String.fromCharCode (e.keyCode));
// });
// window.addEventListener("keyup", (e) => {
//     console.log("Deje de presionar una tecla");
//     // console.log(String.fromCharCode (e.keyCode));
// });
// window.addEventListener("load", () => {
//     console.log("Termine de cargar");
// })
function suma() {
    let numero1 =parseFloat(document.querySelector("#numero1").value);
    let numero2 = parseFloat(document.querySelector("#numero2").value);
    let resultado = numero1+numero2;
    console.log(resultado);
    let span = document.querySelector("#Resultado");
    span.innerHTML =resultado;

}
function resta() {
    let numero1 =parseFloat(document.querySelector("#numero1").value);
    let numero2 = parseFloat(document.querySelector("#numero2").value);
    let resultado = numero1-numero2;
    console.log(resultado);

}
function multiplicacion() {
    let numero1 =parseFloat(document.querySelector("#numero1").value);
    let numero2 = parseFloat(document.querySelector("#numero2").value);
    let resultado = numero1*numero2;
    console.log(resultado);

}
function division() {
    let numero1 =parseFloat(document.querySelector("#numero1").value);
    let numero2 = parseFloat(document.querySelector("#numero2").value);
    let resultado = numero1/numero2;
    console.log(resultado);

}

function agregar() {
    let texto =String(document.querySelector("#texto1").Text);
    let textoarea =+ texto
    let textarea = document.querySelector("#area");
    textarea.innerHTML =textoarea;
}