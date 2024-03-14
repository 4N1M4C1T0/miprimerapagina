//alert("Hola este es mi Javascript");
//let nombre = "Richard";
//nombre = "Daniela";
//var nombre1 = "Richard";
//const nombre2 = "Richard";

//console.log(nombre);
//console.log(nombre1);
//console.log(nombre2);

let contenidoTitulo = "nombres";

let titulo = document.querySelector(".logo .fuente-acento")
titulo.innerHTML = contenidoTitulo;

//CONDICIONALES
let textoTitulo = titulo.innerText;
console.log(textoTitulo);

if (textoTitulo == "nombres") {
    titulo.innerHTML = "Otro"
}   else {
    console.log("No se cumple");
}

//FUNCIONES

let nombres = "RICHARD";
let ciudad ="HUANUCO";
let gusto ="MAKIS";

let parrafo = document.querySelector(".parrafo2");

function cambiarTexto(nombres,ciudad,gusto) {
    let contenido = `Me llamo ${nombres}, naci en ${ciudad} y vivo en Lima. Me gustan los ${gusto} y salir a pasear en dias de sol. Me encantaria aprender a programar para poder ayudar a las personas a mostrar lo que hacen.`;

    return contenido;
}

parrafo.innerText = cambiarTexto(nombres,ciudad,gusto);