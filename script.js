console.log("¡Mi Reloj está funcionando!");

function actualizarReloj(){
const ahora = new Date();
console.log(ahora);


const horas = ahora.getHours();
const minutos = ahora.getMinutes();
const segundos = ahora.getSeconds();    

const horasTexto = horas.toString().padStart(2, "0");
const minutosTexto =minutos.toString().padStart(2, "0");
const segundosTexto = segundos.toString().padStart(2, "0");

const hora = `${horasTexto}:${minutosTexto}:${segundosTexto}`;

const elementoHora = document.getElementById("hora");

elementoHora.textContent = hora;

console.log("Hora actualizada:", hora);
 }
 actualizarReloj();
setInterval(actualizarReloj, 1000); 