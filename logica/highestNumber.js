let counter = 0;
const numeros = [];
for (let i = 1; i < 11; i++) {
  //los string dentro `` se conocen como string literal
  //concatenar variables y texto de forma mas sencilla y legible
  numeros.push(Number(prompt(`Ingresa el numero ${i}: `)));
}
let maxNumber = numeros[0];

while (counter < numeros.length) {
  if (numeros[counter] > maxNumber) {
    maxNumber = numeros[counter];
  }

  counter++;
}
console.log(numeros);
console.log(`El numero más grande es  ${maxNumber}`);