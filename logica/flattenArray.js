/*
Flat array
Write a program that takes the following nested matrix and flattens it (makes it a 1D array). Use any type of algorithm you want like callbacks, recursion, etc...

Lo hice con IA porque desconocia el método isArray
*/

function flattenArray(arr) {
  let result = [];

  for (let element of arr) {
    if (Array.isArray(element)) {
      result = result.concat(flattenArray(element)); // llamada recursiva
    } else {
      result.push(element);
    }
  }

  return result;
}

let multiDimension = [1, [2, 3, [4, 5, [6]]]];
let flat = flattenArray(multiDimension);
console.log(flat);
