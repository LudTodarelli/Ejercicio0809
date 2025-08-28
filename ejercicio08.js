// Pide al usuario que ingrese las longitudes de los tres lados de un
// triángulo. Determina y muestra si el triángulo es equilátero, isósceles o
// escaleno. (Investiga sobre los triángulos para determinar la formula)


let lado1 = parseInt(prompt("Ingrese el valor del primer lado"));
let lado2 = parseInt(prompt("Ingrese el valor del segundo lado"));
let lado3 = parseInt(prompt("Ingrese el valor del tercer lado"));

if (lado1 == lado2 && lado2 == lado3){
    console.log("El triángulo es equilátero")
} else if(lado1 == lado2 && lado2 != lado3) {
    console.log("El triángulo es isósceles")
} else if (lado1 !== lado2 && lado2 == lado3) {
    console.log("El triángulo es isósceles")
} else if (lado1 != lado2 && lado2 != lado3 && lado1 != lado3) {
    console.log("El triángulo es escaleno")
}