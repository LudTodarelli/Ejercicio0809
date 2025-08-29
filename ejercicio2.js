//En este ejercicio, practicarás el uso de condicionales (if, else). Escribe un
//programa en JavaScript que:
//1. Pida al usuario que ingrese un número.
//2. Verifique si el número es positivo, negativo o igual a cero.
//3. Muestre un mensaje indicando cuál es el caso.
//Requisitos:
// Utiliza una estructura de control de flujo (if, else if, else) para hacer las
//verificaciones.
// Usa parseFloat() para convertir la entrada del usuario a un número


const prompt = require('prompt-sync')();
//1. Solicite al usuario que ingrese un número cualquiera.
const numero = parseFloat(prompt("Ingrese un número"));
//2. Verifique si el número es positivo, negativo o igual a cero.
if ( numero > 0 ) {
    console.log ("El número es positivo");
} else if ( numero < 0 ) 
    {console.log ("El número es negativo");

    }else {
console.log ("El número es igual a cero");
}
// Muestre un mensaje indicando cuál es el caso