
// iconos en formato svg de relojes para cada hora
const relojesHoras = {
  1: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100" height="100"><circle cx="100" cy="100" r="85" fill="#ffffff" stroke="#2c3e50" stroke-width="6"/><line x1="100" y1="23" x2="100" y2="33" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="177" y1="100" x2="167" y2="100" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="100" y1="177" x2="100" y2="167" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="23" y1="100" x2="33" y2="100" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="100" y1="100" x2="122" y2="62" stroke="#2c3e50" stroke-width="6" stroke-linecap="round"/><line x1="100" y1="100" x2="100" y2="38" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><circle cx="100" cy="100" r="5" fill="#e74c3c"/></svg>`,
  
  2: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100" height="100"><circle cx="100" cy="100" r="85" fill="#ffffff" stroke="#2c3e50" stroke-width="6"/><line x1="100" y1="23" x2="100" y2="33" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="177" y1="100" x2="167" y2="100" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="100" y1="177" x2="100" y2="167" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="23" y1="100" x2="33" y2="100" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="100" y1="100" x2="138" y2="78" stroke="#2c3e50" stroke-width="6" stroke-linecap="round"/><line x1="100" y1="100" x2="100" y2="38" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><circle cx="100" cy="100" r="5" fill="#e74c3c"/></svg>`,
  
  3: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100" height="100"><circle cx="100" cy="100" r="85" fill="#ffffff" stroke="#2c3e50" stroke-width="6"/><line x1="100" y1="23" x2="100" y2="33" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="177" y1="100" x2="167" y2="100" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="100" y1="177" x2="100" y2="167" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="23" y1="100" x2="33" y2="100" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="100" y1="100" x2="144" y2="100" stroke="#2c3e50" stroke-width="6" stroke-linecap="round"/><line x1="100" y1="100" x2="100" y2="38" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><circle cx="100" cy="100" r="5" fill="#e74c3c"/></svg>`,
  
  4: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100" height="100"><circle cx="100" cy="100" r="85" fill="#ffffff" stroke="#2c3e50" stroke-width="6"/><line x1="100" y1="23" x2="100" y2="33" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="177" y1="100" x2="167" y2="100" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="100" y1="177" x2="100" y2="167" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="23" y1="100" x2="33" y2="100" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="100" y1="100" x2="138" y2="122" stroke="#2c3e50" stroke-width="6" stroke-linecap="round"/><line x1="100" y1="100" x2="100" y2="38" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><circle cx="100" cy="100" r="5" fill="#e74c3c"/></svg>`,
  
  5: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100" height="100"><circle cx="100" cy="100" r="85" fill="#ffffff" stroke="#2c3e50" stroke-width="6"/><line x1="100" y1="23" x2="100" y2="33" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="177" y1="100" x2="167" y2="100" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="100" y1="177" x2="100" y2="167" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="23" y1="100" x2="33" y2="100" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="100" y1="100" x2="122" y2="138" stroke="#2c3e50" stroke-width="6" stroke-linecap="round"/><line x1="100" y1="100" x2="100" y2="38" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><circle cx="100" cy="100" r="5" fill="#e74c3c"/></svg>`,
  
  6: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100" height="100"><circle cx="100" cy="100" r="85" fill="#ffffff" stroke="#2c3e50" stroke-width="6"/><line x1="100" y1="23" x2="100" y2="33" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="177" y1="100" x2="167" y2="100" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="100" y1="177" x2="100" y2="167" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="23" y1="100" x2="33" y2="100" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="100" y1="100" x2="100" y2="144" stroke="#2c3e50" stroke-width="6" stroke-linecap="round"/><line x1="100" y1="100" x2="100" y2="38" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><circle cx="100" cy="100" r="5" fill="#e74c3c"/></svg>`,
  
  7: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100" height="100"><circle cx="100" cy="100" r="85" fill="#ffffff" stroke="#2c3e50" stroke-width="6"/><line x1="100" y1="23" x2="100" y2="33" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="177" y1="100" x2="167" y2="100" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="100" y1="177" x2="100" y2="167" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="23" y1="100" x2="33" y2="100" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="100" y1="100" x2="78" y2="138" stroke="#2c3e50" stroke-width="6" stroke-linecap="round"/><line x1="100" y1="100" x2="100" y2="38" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><circle cx="100" cy="100" r="5" fill="#e74c3c"/></svg>`,
  
  8: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100" height="100"><circle cx="100" cy="100" r="85" fill="#ffffff" stroke="#2c3e50" stroke-width="6"/><line x1="100" y1="23" x2="100" y2="33" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="177" y1="100" x2="167" y2="100" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="100" y1="177" x2="100" y2="167" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="23" y1="100" x2="33" y2="100" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="100" y1="100" x2="62" y2="122" stroke="#2c3e50" stroke-width="6" stroke-linecap="round"/><line x1="100" y1="100" x2="100" y2="38" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><circle cx="100" cy="100" r="5" fill="#e74c3c"/></svg>`,
  
  9: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100" height="100"><circle cx="100" cy="100" r="85" fill="#ffffff" stroke="#2c3e50" stroke-width="6"/><line x1="100" y1="23" x2="100" y2="33" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="177" y1="100" x2="167" y2="100" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="100" y1="177" x2="100" y2="167" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="23" y1="100" x2="33" y2="100" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="100" y1="100" x2="56" y2="100" stroke="#2c3e50" stroke-width="6" stroke-linecap="round"/><line x1="100" y1="100" x2="100" y2="38" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><circle cx="100" cy="100" r="5" fill="#e74c3c"/></svg>`,
  
  10: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100" height="100"><circle cx="100" cy="100" r="85" fill="#ffffff" stroke="#2c3e50" stroke-width="6"/><line x1="100" y1="23" x2="100" y2="33" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="177" y1="100" x2="167" y2="100" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="100" y1="177" x2="100" y2="167" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="23" y1="100" x2="33" y2="100" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="100" y1="100" x2="62" y2="78" stroke="#2c3e50" stroke-width="6" stroke-linecap="round"/><line x1="100" y1="100" x2="100" y2="38" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><circle cx="100" cy="100" r="5" fill="#e74c3c"/></svg>`,
  
  11: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100" height="100"><circle cx="100" cy="100" r="85" fill="#ffffff" stroke="#2c3e50" stroke-width="6"/><line x1="100" y1="23" x2="100" y2="33" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="177" y1="100" x2="167" y2="100" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="100" y1="177" x2="100" y2="167" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="23" y1="100" x2="33" y2="100" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="100" y1="100" x2="78" y2="62" stroke="#2c3e50" stroke-width="6" stroke-linecap="round"/><line x1="100" y1="100" x2="100" y2="38" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><circle cx="100" cy="100" r="5" fill="#e74c3c"/></svg>`,
  
  12: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100" height="100"><circle cx="100" cy="100" r="85" fill="#ffffff" stroke="#2c3e50" stroke-width="6"/><line x1="100" y1="23" x2="100" y2="33" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="177" y1="100" x2="167" y2="100" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="100" y1="177" x2="100" y2="167" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="23" y1="100" x2="33" y2="100" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><line x1="100" y1="100" x2="100" y2="56" stroke="#2c3e50" stroke-width="6" stroke-linecap="round"/><line x1="100" y1="100" x2="100" y2="38" stroke="#2c3e50" stroke-width="4" stroke-linecap="round"/><circle cx="100" cy="100" r="5" fill="#e74c3c"/></svg>`
};

// Solicitar al usuario el número de carteles, puertas y coches a mostrar
const numCarteles = prompt("Ingrese el número de carteles que desea mostrar:");
if (numCarteles < 0) {
  alert("Por favor, ingrese un número válido de carteles.");
}

console.log("Creando " + numCarteles + " carteles");

// Solicitar al usuario el número de la puerta a mostrar
let numPuerta = parseInt(prompt("Ingrese el número de la puerta que desea mostrar:"));
if (numPuerta < 0) {
  alert("Por favor, ingrese un número válido de puerta.");
}

// Solicitar al usuario el número de puertas a mostrar
const numPuertas = parseInt(prompt("Ingrese el número de puertas que desea mostrar:"));
if (numPuertas < 0) {
  alert("Por favor, ingrese un número válido de puertas.");
}

console.log("Creando " + numPuertas + " puertas");

// Solicitar al usuario el número de escaparates a mostrar
let numEscaparates = parseInt(prompt("Inserte el número de escaparates que desea mostrar:"));
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

const colorSemaforo = prompt("Ingrese el color del semáforo (rojo, amarillo, verde):");
if (colorSemaforo !== "rojo" && colorSemaforo !== "amarillo" && colorSemaforo !== "verde") {
  alert("Por favor, ingrese un color válido para el semáforo (rojo, amarillo, verde).");
}

// Solicitar al usuario el número de coches a mostrar
const numCoches = prompt("Ingrese el número de coches que desea mostrar:");
if (numCoches < 0) {
  alert("Por favor, ingrese un número válido de coches.");
}

console.log("Creando " + numCoches + " coches");

for (let i = 0; i < numCarteles; i++) {
  document.write(`<div class="cartel"><img class="poster" src="img/poster.jpg" alt="Cartel ${i + 1}"></div>`);
}

document.write(`<div class="numero-y-puerta">`);
for (let i = 0; i < numPuertas; i++) {  
  document.write(`<div class="div-puerta">`)
  document.write(`<div class="num-puerta">${numPuerta}</div>`);
  document.write(`<div class="puerta"><img class="door" src="img/puerta.png" alt="Puerta ${i + 1}"></div>`);
  document.write(`</div>`);
  numPuerta += 2;
}
document.write(`</div>`);

while (numEscaparates > 0) {
  document.write(`<div class="escaparate"><img class="shop-window" src="img/escaparate.jpg" alt="Escaparate"></div>`);
  numEscaparates--;
}

document.write(`<div class="reloj-semaforo">`);
switch (hora) {
  case "1":
    document.write(relojesHoras[1]);
    break;
  case "2":
    document.write(relojesHoras[2]);
    break;
  case "3":
    document.write(relojesHoras[3]);
    break;
  case "4":
    document.write(relojesHoras[4]);
    break;
  case "5":
    document.write(relojesHoras[5]);
    break;
  case "6":
    document.write(relojesHoras[6]);
    break;
  case "7":
    document.write(relojesHoras[7]);
    break;
  case "8":
    document.write(relojesHoras[8]);
    break;
  case "9":
    document.write(relojesHoras[9]);
    break;
  case "10":
    document.write(relojesHoras[10]);
    break;
  case "11":
    document.write(relojesHoras[11]);
    break;
  case "12":
    document.write(relojesHoras[12]);
    break;
}

switch (colorSemaforo) {
  case "rojo":
    document.write(`<div class="semaforo"><img class="color-semaforo" src="img/rojo.png" alt="Semaforo Rojo"></div>`);
    break;
  case "amarillo":
    document.write(`<div class="semaforo"><img class="color-semaforo" src="img/amarillo.png" alt="Semaforo Amarillo"></div>`);
    break;
  case "verde":
    document.write(`<div class="semaforo"><img class="color-semaforo" src="img/verde.png" alt="Semaforo Verde"></div>`);
    break;
}
document.write(`</div>`);

for (let i = 0; i < numCoches; i++) {
  document.write(`<div class="coche"><img class="car" src="img/car.png" alt="Coche ${i + 1}"></div>`);
}








