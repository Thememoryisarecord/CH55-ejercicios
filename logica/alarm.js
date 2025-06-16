/**
 * Alarm
Write a program that asks a user for the amount of seconds needed until an alarm (message) is executed alongside a text to show once those seconds have passed in real time.
 

ESTE PROGRAMA NO SABÍA HACERLO, PEDI AYUDA A CHAT, DEJE SUS COMENTARIOS PARA COMPRENDERLO MEJOR
*/


// Pedimos al usuario cuántos segundos esperar
const seconds = parseInt(prompt("¿Cuántos segundos quieres esperar para la alarma?"));

// Pedimos el mensaje que se mostrará
const message = prompt("¿Qué mensaje quieres que se muestre cuando suene la alarma?");

// Validamos que sea un número válido
if (!isNaN(seconds) && seconds > 0) {
  // Convertimos a milisegundos y usamos setTimeout
  setTimeout(function () {
    alert("Alarma: " + message);
  }, seconds * 1000);

  alert(`La alarma sonará en ${seconds} segundos...`);
} else {
  alert("Por favor ingresa un número válido de segundos.");
}