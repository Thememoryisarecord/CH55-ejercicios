let counter = 0;
const username = prompt("Ingresa tu username");
const age = prompt("Ingresa tu edad: ");
const favoriteMovies = [];

for (let i = 1; i <= 5; i++) {
  //los string dentro `` se conocen como string literal
  //concatenar variables y texto de forma mas sencilla y legible
  favoriteMovies.push(prompt(`Ingresa la pelicula numero ${i}: `));
  //equivalente a "Ingresa la pelicula numero " + i +":"
}

console.log(`Hola soy ${username} tengo ${age} a;os y mis peliculas favs son: `);

while (counter < favoriteMovies.length) {
  console.log(`Mi pelicula fav numero ${counter + 1} es ${favoriteMovies[counter]}`);

  counter++;
}