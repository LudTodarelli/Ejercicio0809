// Pide al usuario que ingrese su peso en kilogramos y conviértelo a
// libras. Muestra el resultado con un mensaje. (Averigua como pasar de
// kg a libras, Pista: 2.20462)

let pesokg = parseFloat(prompt("Ingrese su peso en kilogramos"));

let pesolibras = pesokg * 2.20462;

console.log(`El peso en kilogramos es ${pesokg} y pasado a libras queda en ${pesolibras}`);
