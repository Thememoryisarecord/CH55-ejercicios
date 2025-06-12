//Reto de Programación: FizzBuzz
// Descripción:
// Escribe un programa que recorra los números del 1 al 100 y aplique las siguientes reglas:
// Si el número es múltiplo de 3, imprime "Fizz".
// Si el número es múltiplo de 5, imprime "Buzz".
// Si el número es múltiplo de 3 y 5, imprime "FizzBuzz".
// Si no es múltiplo de ninguno, imprime el número tal cual

/** 
 * 1. fizz, buzz, fizzbuzz
 * 2. Creaer un bucle que recorra 100 numeros
 * 3 Si el numero es multiplo de 3, imprime fizz
 *  3.1 ocupar la expresion numero %3
 *  3.2 es verdadero si el modulo es = 0
 * 4 Si el numero es multiplo de 5, imprime buzz
 *  4.1 ocupar la expresion numero %3
 *  4.2 es verdadero si el modulo es = 0
 * 5 Si el numero es multiplo de 3 y  5, imprime fizzbuzz
 *  5.1 ocuipar la expresion modulo %3 y %5
 *  5.2 es verdadero solo y solo ambas expresiones son = 0
 * 6 Si el numero no es multiplo de ninguno, imprime el numero
 */

// let counter = 1;
// do {
//   if (counter % 3 == 0 && counter % 5 == 0) {
//     console.log(`El numero ${counter} es FizzBuzz`);
//   } else if (counter % 3 == 0) {
//     console.log(`El numero ${counter} es Fizz`);
//   } else if (counter % 5 == 0) {
//     console.log(`El numero ${counter} es Fizz`);
//   } else {
//     console.log(counter);
//   }
//   counter++;
// } while (counter <= 100)

