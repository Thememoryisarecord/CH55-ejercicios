/*
Palindrome
Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). 
Figure out if the sentence/word is a palindrome or not. Ignoring punctuation, spaces and capitalized letters.
1.- Recibir un string por parte del usuario
2.- Ignorar signos de puntuación, espacios y letras mayusculas
3.- Verificar si es un palindromo, es decir que se escriben igual al derecho y al revés
 */

const entrada = prompt("Ingrese una palabra o una oración para verificar si se trata de un palindromo");

const entrada_Minus = entrada.toLowerCase();

let entrada_prueba = "";
for (let i = 0; i < entrada_Minus.length; i++) {
  let letra = entrada_Minus[i];
  if ((letra >= 'a' && letra <= 'z') || (letra >= '0' && letra <= '9')) {
    entrada_prueba += letra;
  }
}

var entarda_inversa = "";
for (let i = entrada_prueba.length - 1; i >= 0; i--) {
  entarda_inversa = entarda_inversa + entrada_prueba[i];
}

if (entrada_prueba === entarda_inversa) {
  console.log("Es palindromo");
}
else {
  console.log("No es un palindromo");
}