
// iconos en formato svg de relojes para cada hora
const relojesHoras = {
  1: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100" height="100"><circle cx="100" cy="100" r="85" fill="#ffffff" stroke="#2c3e50" stroke-width="6"/><line x1="100" y1="23" x2="100" y2="33" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="177" y1="100" x2="167" y2="100" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="100" y1="177" x2="100" y2="167" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="23" y1="100" x2="33" y2="100" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="100" y1="100" x2="142" y2="58" stroke="#2c3e50" stroke-width="6" stroke-linecap="round"/><line x1="100" y1="100" x2="100" y2="38" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><circle cx="100" cy="100" r="5" fill="#e74c3c"/></svg>`,
  
  2: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100" height="100"><circle cx="100" cy="100" r="85" fill="#ffffff" stroke="#2c3e50" stroke-width="6"/><line x1="100" y1="23" x2="100" y2="33" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="177" y1="100" x2="167" y2="100" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="100" y1="177" x2="100" y2="167" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="23" y1="100" x2="33" y2="100" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="100" y1="100" x2="142" y2="100" stroke="#2c3e50" stroke-width="6" stroke-linecap="round" transform="rotate(30 100 100)"/><line x1="100" y1="100" x2="100" y2="38" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><circle cx="100" cy="100" r="5" fill="#e74c3c"/></svg>`,
  
  3: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100" height="100"><circle cx="100" cy="100" r="85" fill="#ffffff" stroke="#2c3e50" stroke-width="6"/><line x1="100" y1="23" x2="100" y2="33" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="177" y1="100" x2="167" y2="100" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="100" y1="177" x2="100" y2="167" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="23" y1="100" x2="33" y2="100" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="100" y1="100" x2="155" y2="100" stroke="#2c3e50" stroke-width="6" stroke-linecap="round"/><line x1="100" y1="100" x2="100" y2="38" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><circle cx="100" cy="100" r="5" fill="#e74c3c"/></svg>`,
  
  4: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100" height="100"><circle cx="100" cy="100" r="85" fill="#ffffff" stroke="#2c3e50" stroke-width="6"/><line x1="100" y1="23" x2="100" y2="33" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="177" y1="100" x2="167" y2="100" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="100" y1="177" x2="100" y2="167" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="23" y1="100" x2="33" y2="100" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="100" y1="100" x2="142" y2="142" stroke="#2c3e50" stroke-width="6" stroke-linecap="round"/><line x1="100" y1="100" x2="100" y2="38" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><circle cx="100" cy="100" r="5" fill="#e74c3c"/></svg>`,
  
  5: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100" height="100"><circle cx="100" cy="100" r="85" fill="#ffffff" stroke="#2c3e50" stroke-width="6"/><line x1="100" y1="23" x2="100" y2="33" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="177" y1="100" x2="167" y2="100" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="100" y1="177" x2="100" y2="167" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="23" y1="100" x2="33" y2="100" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="100" y1="100" x2="100" y2="142" stroke="#2c3e50" stroke-width="6" stroke-linecap="round" transform="rotate(60 100 100)"/><line x1="100" y1="100" x2="100" y2="38" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><circle cx="100" cy="100" r="5" fill="#e74c3c"/></svg>`,
  
  6: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100" height="100"><circle cx="100" cy="100" r="85" fill="#ffffff" stroke="#2c3e50" stroke-width="6"/><line x1="100" y1="23" x2="100" y2="33" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="177" y1="100" x2="167" y2="100" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="100" y1="177" x2="100" y2="167" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="23" y1="100" x2="33" y2="100" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="100" y1="100" x2="100" y2="155" stroke="#2c3e50" stroke-width="6" stroke-linecap="round"/><line x1="100" y1="100" x2="100" y2="38" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><circle cx="100" cy="100" r="5" fill="#e74c3c"/></svg>`,
  
  7: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100" height="100"><circle cx="100" cy="100" r="85" fill="#ffffff" stroke="#2c3e50" stroke-width="6"/><line x1="100" y1="23" x2="100" y2="33" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="177" y1="100" x2="167" y2="100" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="100" y1="177" x2="100" y2="167" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="23" y1="100" x2="33" y2="100" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="100" y1="100" x2="58" y2="142" stroke="#2c3e50" stroke-width="6" stroke-linecap="round"/><line x1="100" y1="100" x2="100" y2="38" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><circle cx="100" cy="100" r="5" fill="#e74c3c"/></svg>`,
  
  8: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100" height="100"><circle cx="100" cy="100" r="85" fill="#ffffff" stroke="#2c3e50" stroke-width="6"/><line x1="100" y1="23" x2="100" y2="33" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="177" y1="100" x2="167" y2="100" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="100" y1="177" x2="100" y2="167" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="23" y1="100" x2="33" y2="100" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="100" y1="100" x2="58" y2="100" stroke="#2c3e50" stroke-width="6" stroke-linecap="round" transform="rotate(210 100 100)"/><line x1="100" y1="100" x2="100" y2="38" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><circle cx="100" cy="100" r="5" fill="#e74c3c"/></svg>`,
  
  9: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100" height="100"><circle cx="100" cy="100" r="85" fill="#ffffff" stroke="#2c3e50" stroke-width="6"/><line x1="100" y1="23" x2="100" y2="33" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="177" y1="100" x2="167" y2="100" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="100" y1="177" x2="100" y2="167" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="23" y1="100" x2="33" y2="100" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="100" y1="100" x2="45" y2="100" stroke="#2c3e50" stroke-width="6" stroke-linecap="round"/><line x1="100" y1="100" x2="100" y2="38" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><circle cx="100" cy="100" r="5" fill="#e74c3c"/></svg>`,
  
  10: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100" height="100"><circle cx="100" cy="100" r="85" fill="#ffffff" stroke="#2c3e50" stroke-width="6"/><line x1="100" y1="23" x2="100" y2="33" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="177" y1="100" x2="167" y2="100" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="100" y1="177" x2="100" y2="167" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="23" y1="100" x2="33" y2="100" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="100" y1="100" x2="58" y2="58" stroke="#2c3e50" stroke-width="6" stroke-linecap="round"/><line x1="100" y1="100" x2="100" y2="38" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><circle cx="100" cy="100" r="5" fill="#e74c3c"/></svg>`,
  
  11: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100" height="100"><circle cx="100" cy="100" r="85" fill="#ffffff" stroke="#2c3e50" stroke-width="6"/><line x1="100" y1="23" x2="100" y2="33" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="177" y1="100" x2="167" y2="100" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="100" y1="177" x2="100" y2="167" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="23" y1="100" x2="33" y2="100" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="100" y1="100" x2="100" y2="58" stroke="#2c3e50" stroke-width="6" stroke-linecap="round" transform="rotate(300 100 100)"/><line x1="100" y1="100" x2="100" y2="38" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><circle cx="100" cy="100" r="5" fill="#e74c3c"/></svg>`,
  
  12: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100" height="100"><circle cx="100" cy="100" r="85" fill="#ffffff" stroke="#2c3e50" stroke-width="6"/><line x1="100" y1="23" x2="100" y2="33" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="177" y1="100" x2="167" y2="100" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="100" y1="177" x2="100" y2="167" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="23" y1="100" x2="33" y2="100" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="100" y1="100" x2="100" y2="55" stroke="#2c3e50" stroke-width="6" stroke-linecap="round"/><line x1="100" y1="100" x2="100" y2="38" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><circle cx="100" cy="100" r="5" fill="#e74c3c"/></svg>`
};

// Solicitar al usuario el número de carteles, puertas y coches a mostrar
const numCarteles = prompt("Ingrese el número de carteles que desea mostrar:");
if (numCarteles < 0) {
  alert("Por favor, ingrese un número válido de carteles.");
}

console.log("Creando " + numCarteles + " carteles");

// Solicitar al usuario el número de puertas a mostrar
const numPuertas = prompt("Ingrese el número de puertas que desea mostrar:");
if (numPuertas < 0) {
  alert("Por favor, ingrese un número válido de puertas.");
}

console.log("Creando " + numPuertas + " puertas");

// Solicitar al usuario el número de escaparates a mostrar
const numEscaparates = prompt("Inserte el número de escaparates que desea mostrar:");
if (numEscaparates < 0) {
  alert("Por favor, ingrese un número válido de escaparates.");
}

console.log("Creando " + numEscaparates + " escaparates");

// Solicitar al usuario la hora que desea mostrar
const hora = prompt("Ingrese la hora (1-12):");
if (hora < 1 || hora > 12) {
  alert("Por favor, ingrese una hora válida entre 1 y 12.");
}

console.log("Creando un reloj apuntando a las " + hora);

// Solicitar al usuario el número de coches a mostrar
const numCoches = prompt("Ingrese el número de coches que desea mostrar:");
if (numCoches < 0) {
  alert("Por favor, ingrese un número válido de coches.");
}

console.log("Creando " + numCoches + " coches");





