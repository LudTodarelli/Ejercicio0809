// Pide al usuario que ingrese un número del 1 al 7 y muestra el día de la
// semana correspondiente. Si el número no está dentro de ese rango,
// muestra un mensaje de error.


let numero = parseInt(prompt("Ingrese un número del 1 al 7"));

switch (numero) {
    case 1 :
        console.log("Es lunes");
        break;
    case 2 :
        console.log("Es martes");
        break;
    case 3 :
        console.log("Es miércoles");
        break;
    case 4 :
        console.log("Es jueves");
        break;
    case 5 :
        console.log("Es viernes");
        break;
    case 6 :
        console.log("Es sábado");
        break;  
    case 7 :
        console.log("Es domingo");
        break;


    default:
        console.log("El número no es correcto");
        break;
}