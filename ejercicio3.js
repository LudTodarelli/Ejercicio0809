//Enunciado:
//Este ejercicio te ayudará a practicar la entrada de datos y el uso de operadores
//aritméticos. Escribe un programa que:
//1. Pida al usuario que ingrese dos números.
//2. Sume ambos números.
//3. Muestre el resultado de la suma.
//Requisitos:
// Utiliza prompt() para recibir los números.
// Utiliza parseFloat() para convertir las entradas a números.
// Almacena los resultados en variables adecuadas y muestra el resultado.

//1. Pida al usuario que ingrese dos números.
const prompt = require('prompt-sync')();
const numero1 = parseFloat(prompt("Ingrese el primer número"));
const numero2 = parseFloat(prompt("Ingrese el segundo número"));
//2. Sume ambos números.
let suma = numero1 + numero2;
//3. Muestre el resultado de la suma.
console.log (`La suma de ambos números es ${suma}`);

