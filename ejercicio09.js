// Define una constante PI con el valor de pi (3.14159). Pide al usuario
// que ingrese el radio de un círculo y calcula su área y perímetro
// utilizando la constante PI.

const PI = 3.14159;
let radio =parseFloat(prompt("Ingrese el radio de un círculo"));

let area = PI * radio**2;
let perimetro = 2 * radio * PI;

console.log(`El área del círculo es ${area}`);
console.log(`El perímetro de un círculo es ${perimetro} `);