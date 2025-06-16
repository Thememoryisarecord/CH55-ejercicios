/**
 * Array of Multiples
 

Create a function that takes two parameters (number, length) and returns an array of length containing multiples of the number.
 

Examples:
- `arrayMultiplos(2, 10)` should return `[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]`.
- `arrayMultiplos(17, 6)` should return `[17, 34, 51, 68, 85, 102]`.
 */


let num = parseInt(prompt("Ingresa el número base:"));
let cantidadMultiplos = parseInt(prompt("¿Cuántos múltiplos quieres?"));
let multiplos = [];

for (let i = 1; i <= cantidadMultiplos; i++) {
  multiplos.push(num * i);
}

alert("Múltiplos: " + multiplos.join(", "));
