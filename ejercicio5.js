//Este ejercicio es ideal para familiarizarse con la manipulación de cadenas de
//texto y la función prompt(). Escribe un programa que:
//1. Solicite al usuario que ingrese su nombre.
//2. Muestre un saludo personalizado usando el nombre ingresado.
//Requisitos:Utiliza prompt() para recibir el nombre del usuario.
// Muestra un mensaje utilizando concatenación de cadenas.

//1. Solicite al usuario que ingrese su nombre.
const prompt = require('prompt-sync')();
const nombre = (prompt("Ingrese un nombre"));
//2. Muestre un saludo personalizado usando el nombre ingresado.
console.log ("Feicitaciones " + nombre + " usted ha ganado la lotería");
