//Define dos constantes, RANGO_MINIMO y RANGO_MAXIMO, con
//valores numéricos de tu elección. Pide al usuario que ingrese un
//número y verifica si está dentro del rango definido por las constantes.

//Define dos constantes, RANGO_MINIMO y RANGO_MAXIMO,
const prompt = require('prompt-sync')();
const rango_minimo = 1
const rango_maximo = 5
const numero = parseFloat(prompt("Ingrese un número"));

if (numero > rango_minimo && numero < rango_maximo) {

console.log(`El número ${numero} está en rango`);

} else {(console.log (`El número ${numero} no está en rango`));
}
