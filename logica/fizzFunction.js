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

//firma de la funcion
const fizzBuzz = (counterNumber) => {
  let counter = 1;
  do {
    if (counter % 3 == 0 && counter % 5 == 0) {
      console.log(`El numero ${counter} es FizzBuzz`);
    } else if (counter % 3 == 0) {
      console.log(`El numero ${counter} es Fizz`);
    } else if (counter % 5 == 0) {
      console.log(`El numero ${counter} es Fizz`);
    } else {
      console.log(counter);
    }
    counter++;
  } while (counter <= counterNumber)
}

console.log("50 veces");
console.log(fizzBuzz(50));

