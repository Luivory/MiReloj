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
//setInterval(actualizarReloj, 1000); 

function fechaActual(){

    const hoy = new Date();
    //const dia = hoy.getDate();
    //const mes = hoy.getMonth() + 1; 
    //const anio = hoy.getFullYear();

    //return `${dia}/${mes}/${anio}`;
return hoy.toLocaleDateString("es-ES",
    {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    }
);


}
console.log(fechaActual());

const elementoFecha = document.getElementById("fecha");
elementoFecha.textContent = fechaActual();  