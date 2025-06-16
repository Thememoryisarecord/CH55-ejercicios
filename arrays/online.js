/**
 * Online status

Display online status for a list of users.
 
Example:
- `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` should return `'mockIng99, J0eyPunch and 1 more online'`.
 */


let cantidadUsuarios = parseInt(prompt("¿Cuántos usuarios están en línea?"));
let usuarios = [];

for (let i = 0; i < cantidadUsuarios; i++) {
  let nombre = prompt("Nombre del usuario " + (i + 1) + ":");
  usuarios.push(nombre);
}

let mensaje = "";
if (usuarios.length === 0) {
  mensaje = "Nadie está en línea";
} else if (usuarios.length === 1) {
  mensaje = usuarios[0] + " está en línea";
} else if (usuarios.length === 2) {
  mensaje = usuarios[0] + " y " + usuarios[1] + " están en línea";
} else {
  let resto = usuarios.length - 2;
  mensaje = usuarios[0] + ", " + usuarios[1] + " y " + resto + " más en línea";
}

alert(mensaje);
