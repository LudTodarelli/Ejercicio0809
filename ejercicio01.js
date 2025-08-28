//Ejercicio 1:
//Declara dos variables numéricas numero1 y numero2. Pide al usuario
//que ingrese dos números y muestra cuál es mayor o si son iguales.


//Declara dos variables numéricas numero1 y numero2
//Pide al usuario que ingrese dos números
const prompt = require('prompt-sync')();
const numero1 = parseFloat(prompt("Ingrese el primer número"));
const numero2 = parseFloat(prompt("Ingrese el segundo número"));
//muestra cuál es mayor o si son iguales.
if (numero1 > numero2) {
    console.log (`El ${numero1}es mayor`);
} else if (numero2 > numero1) {
    console.log (`El ${numero2}es mayor`);
} else if (numero1 == numero2) {
    console.log (`El ${numero1} y ${numero2} son iguales`);
} 
