// Escribe un programa que pida al usuario que ingrese tres números y
// determine cuál es el mayor de los tres.

let numero1 = prompt("Ingrese el primer número");
let numero2 = prompt("Ingrese el segundo número");
let numero3 = prompt("Ingrese el tercer número");

if (numero1 > numero2 && numero1 > numero3) {
    console.log(`El primer número, ${numero1} es el mayor`)
} else if (numero2 > numero1 && numero2 > numero3) {
    console.log(`El segundo número, ${numero2} es el mayor`)
} else if (numero3 > numero1 && numero3 > numero2) {
    console.log(`El tercer número, ${numero3} es el mayor`)
}