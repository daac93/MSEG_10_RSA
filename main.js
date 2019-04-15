// Main.js
// Este es el ejecutble principal
// Proyecto 2 - MSEG10

var rsa = require('cenfo-rsa');

var C = rsa.encriptar("hola");
var M = rsa.desencriptar(C);

console.log(C);
console.log(M);
console.log(String.fromCharCode(65,66,67)); // :)
console.log('A'.charCodeAt(0)); // :)
console.log("fin de la ejecucion");


// Entregables de este proyecto:
// ---------------------------------------------------

// cenfo-rsa (30 pts)
// - encriptar y desencriptar
// - debe ser capaz de encriptar cualquier texto

// cenfo-util (30 pts)
// - estimar gdc, e, d y n.

// Mocha (30 pts)
// deben probar adecuada y exhaustivamente las 2 librerias
// utilizen la presentacion de RSA.pptx como base teorica

// Code Review? (10 pts)
// Semana 14

// ** NO SE PUEDEN UTILIZAR LIBRERIAS DE NPM a excepcion de Mocha **
// El uso de librerias terceras invalida el proyecto y asigna una nota de
// 30/100 automaticamente.
