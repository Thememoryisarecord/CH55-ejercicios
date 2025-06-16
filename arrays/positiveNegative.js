/**
 * Positive dominance in Array
Write a function to determine if an array is positively dominant.
An array is positively dominant when the majority of its elements are positive. 
Example:
- `positiveDom([-1, -3, -5, 4, 6767])` should return `false`.
 */

let cantidadNumeros = parseInt(prompt("¿Cuántos números vas a ingresar?"));
let positivos = 0;
let negativos = 0;

for (let i = 0; i < cantidadNumeros; i++) {
  let numeroIngresado = parseFloat(prompt("Ingresa el número " + (i + 1) + ":"));
  if (numeroIngresado > 0) {
    positivos++;
  } else if (numeroIngresado < 0) {
    negativos++;
  }
}

if (positivos > negativos) {
  alert("El arreglo es positivamente dominante");
} else {
  alert("El arreglo NO es positivamente dominante");
}
