/**
 * Given a number, return the number divided into its halves in an array.
Examples:
- `numDiv(4)` should return `[2, 2]`.
- `numDiv(10)` should return `[5, 5]`.
 */
let numero = parseFloat(prompt("Ingresa un número para dividirlo a la mitad:"));
let mitad = numero / 2;
let resultado = [mitad, mitad];
alert("Resultado: [" + resultado[0] + ", " + resultado[1] + "]");
