console.log("¡Mi Reloj está funcionando!");

function actualizarReloj(){
const ahora = new Date();


const horas = ahora.getHours();
const minutos = ahora.getMinutes();
const segundos = ahora.getSeconds();    

const horasTexto = horas.toString().padStart(2, "0");
const minutosTexto =minutos.toString().padStart(2, "0");
const segundosTexto = segundos.toString().padStart(2, "0");

const hora = `${horasTexto}:${minutosTexto}:${segundosTexto}`;

const elementoHora = document.getElementById("hora");

elementoHora.textContent = hora;


 }
 actualizarReloj();
//setInterval(actualizarReloj, 1000); 

function fechaActual(){

    const hoy = new Date();
    
return hoy.toLocaleDateString("es-ES",
    {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    }
);

}


const elementoFecha = document.getElementById("fecha");
elementoFecha.textContent = fechaActual();  

// Variables necesarias para controlar el tiempo del cronómetro.

let intervaloCronometro = null; // Identificador del intervalo de actualización.
let tiempoTranscurrido = 0;  // Tiempo acumulado en milisegundos.
let inicioCronometro = null;

// Obtenemos el marcador donde mostraremos el tiempo.

const elementoCronometro = document.getElementById("cronometro");

// Obtenemos los botones para controlar el cronómetro.
const botonIniciar = document.getElementById("iniciar");
const botonPausar = document.getElementById("pausar");
const botonReiniciar = document.getElementById("reiniciar");    

// Convierte los milisegundos en minutos, segundos y centésimas.

function formatearTiempo(milisegundos) {
    const minutos = Math.floor(milisegundos / 60000);
    const segundos = Math.floor((milisegundos % 60000) / 1000);
    const centesimas = Math.floor((milisegundos % 1000) / 10);  

//Añadimos ceros a la izquierda si es necesario y devolvemos el tiempo formateado.

const minutosTexto = minutos.toString().padStart(2, "0");
const segundosTexto = segundos.toString().padStart(2, "0");
const centesimasTexto = centesimas.toString().padStart(2, "0"); 

//Devolvemos el tiempo en formato mm:ss:cc
return `${minutosTexto}:${segundosTexto}:${centesimasTexto}`;   


}

//Calcular el tiempo transcurrido y mostrarlo en pantalla.

function actualizarCronometro(){

    const tiempoActual = Date.now();

    const tiempoTotal = tiempoTranscurrido + (tiempoActual - inicioCronometro); 
    
    elementoCronometro.textContent = formatearTiempo(tiempoTotal);  

}

//Inicia el cronómetro y evita crear varios intervalos.

function iniciarCronometro() {

    if (intervaloCronometro !==null){
        return;
    }
    inicioCronometro = Date.now();
    intervaloCronometro = setInterval(actualizarCronometro, 10);

}
//Pausa el cronómetro y guarda el tiempo transcurrido hasta el momento.
function pausarCronometro() {
    if (intervaloCronometro === null) {
        return;
    }
    actualizarCronometro(); // Actualiza el cronómetro antes de pausar
    tiempoTranscurrido += Date.now() - inicioCronometro;
    clearInterval(intervaloCronometro);
    intervaloCronometro = null;
}

//Reinicia el cronómetro y resetea el tiempo transcurrido a cero.
function reiniciarCronometro() {

    
    clearInterval(intervaloCronometro);
    intervaloCronometro = null;
    tiempoTranscurrido = 0;
    inicioCronometro = 0;
    elementoCronometro.textContent = formatearTiempo(0);    

}

// Ejecuta la función cuando pulsamos el botón Iniciar.

botonIniciar.addEventListener("click", iniciarCronometro);
botonPausar.addEventListener("click", pausarCronometro);
botonReiniciar.addEventListener("click", reiniciarCronometro);




console.log(formatearTiempo(0));
console.log(formatearTiempo(1000));
console.log(formatearTiempo(75480));  
console.log(botonReiniciar);    
