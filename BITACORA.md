# MiReloj — Bitácora del proyecto

## 1. Información general

- **Proyecto:** MiReloj
- **Inicio:** 15 de octubre de 2026, 14:30:19 (CEST, UTC+2)
- **Entorno de desarrollo:** Visual Studio Code
- **Tecnologías:** HTML, CSS y JavaScript
- **Repositorio:** https://github.com/Luivory/MiReloj
- **Estado:** Desarrollo inicial en marcha. Interfaz creada y reloj digital funcional.

## 2. Objetivo

Desarrollar una aplicación web sencilla para practicar programación y aprender a organizar un proyecto, probar sus funciones y gestionar sus versiones con Git y GitHub.

## 3. Funcionalidades previstas

- [x] Reloj digital que muestre la hora actual.
- [ ] Mostrar la fecha actual.
- [ ] Reloj analógico.
- [ ] Selector entre formato digital y analógico.
- [ ] Cronómetro con inicio, pausa y reinicio.
- [ ] Temporizador con cuenta atrás y aviso al finalizar.
- [ ] Consulta de la hora en distintas ciudades y husos horarios.
- [ ] Mejorar el diseño visual y valorar la incorporación de un modo claro y oscuro.

## 4. Registro de sesiones

### Sesión 0 — Preparación del entorno

**Fecha:** 15/10/2026

**Trabajo realizado:**
- Instalación de Git para Windows.
- Configuración del nombre y correo para los commits.
- Inicialización del repositorio local en la rama `main`.
- Conexión con el repositorio remoto de GitHub.
- Publicación del archivo `README.md`.
- Creación del archivo `BITACORA.md`.

**Resultado:** entorno preparado para comenzar el desarrollo desde Visual Studio Code.

### Sesión 1 — Planificación inicial del desarrollo web

**Fecha:** 16/10/2026

**Trabajo realizado:**
- Revisión de la estructura inicial del repositorio en VS Code.
- Comprobación de los archivos existentes: `README.md` y `BITACORA.md`.
- Definición del objetivo inicial de la aplicación web MiReloj.
- Planificación de las tecnologías que se utilizarán: HTML, CSS y JavaScript.
- Organización de las primeras tareas de desarrollo.

**Resultado:** entorno revisado y planificación inicial definida. Se establecieron las primeras funcionalidades de la aplicación.

**Próximos pasos previstos en esta sesión:**
- Crear el archivo `index.html`.
- Desarrollar la estructura básica de la página.
- Implementar el reloj digital y mostrar la fecha.
- Continuar con el cronómetro y el resto de las funcionalidades previstas.

### Sesión 2 — Desarrollo de la interfaz y del reloj digital

**Fecha:** 16/10/2026

**Trabajo realizado:**
- Creación de `index.html` con la estructura básica de la aplicación.
- Creación y vinculación de `style.css` para dar estilo a la interfaz.
- Práctica con selectores CSS, clases, identificadores, márgenes, rellenos, bordes redondeados, sombras y control de dimensiones.
- Creación de `script.js` y vinculación con el documento HTML.
- Primeras pruebas de JavaScript mediante `console.log()` y la consola del navegador.
- Uso del objeto `Date` para obtener la fecha y hora del sistema.
- Extracción de horas, minutos y segundos mediante sus métodos correspondientes.
- Conversión de números a texto y uso de `padStart()` para mostrar dos dígitos.
- Construcción de la hora en formato `HH:MM:SS` mediante plantillas de texto.
- Manipulación del DOM con `document.getElementById()` y `textContent` para mostrar la hora en la página.
- Organización de la lógica mediante la función `actualizarReloj()`.
- Uso de `setInterval()` para actualizar el reloj cada segundo.
- Identificación y corrección de errores relacionados con los argumentos de `toString()` y el ámbito de las variables.
- Pruebas de la página con Live Server y comprobación de la actualización automática al guardar los cambios.

**Resultado:** interfaz web básica creada y reloj digital funcional. La hora se obtiene del sistema y se actualiza automáticamente cada segundo. Se han practicado conceptos fundamentales de HTML, CSS y JavaScript, así como la detección y corrección de errores.

**Próximos pasos:**
- Mostrar la fecha actual en la interfaz.
- Revisar y mejorar la organización del código.
- Desarrollar el cronómetro.
- Continuar mejorando el diseño visual de la aplicación.

### Sesión 3 — Fecha actual y desarrollo del cronómetro

**Fecha:** 19/10/2026

**Trabajo realizado:**
- Creación de la función fechaActual() para obtener la fecha del sistema.
- Uso de toLocaleDateString() con la configuración regional es-ES para mostrar el día de la semana, el día del mes, el mes y el año en español.
- Manipulación del DOM mediante document.getElementById() y textContent para mostrar la fecha en la interfaz.
- Organización del código JavaScript mediante comentarios para identificar las variables y las funciones principales.
- Ampliación de la estructura HTML para incorporar una tarjeta de cronómetro debajo del reloj digital.
- Creación del marcador id="cronometro" y de los botones para iniciar, pausar y reiniciar el contador.
- Aplicación de estilos CSS a la tarjeta del cronómetro y a sus botones, manteniendo una apariencia coherente con el reloj digital.
- Creación de variables para controlar el intervalo, el tiempo transcurrido y el instante de inicio del cronómetro.
- Desarrollo de la función formatearTiempo() para convertir milisegundos en minutos, segundos y centésimas.
- Uso de Math.floor(), el operador módulo % y padStart() para calcular y presentar el tiempo.
- Desarrollo de la función actualizarCronometro() para calcular el tiempo transcurrido y actualizar el marcador.
- Implementación de las funciones para iniciar, pausar y reiniciar el cronómetro.
- Uso de setInterval() y clearInterval() para controlar la actualización y la pausa del contador.
- Vinculación de los botones con sus respectivas funciones mediante addEventListener().
- Realización de pruebas en el navegador y en la consola para comprobar el formato del tiempo y el avance del cronómetro.

**Resultado:** fecha actual integrada en la interfaz y tarjeta del cronómetro incorporada debajo del reloj digital. Se han implementado las funciones principales para iniciar, pausar y reiniciar el contador, y se ha comprobado visualmente que el cronómetro avanza. Queda completar la comprobación de todas las acciones y reactivar la actualización automática del reloj digital, que permanece desactivada temporalmente durante las pruebas.

**Próximos pasos:**
- Comprobar el funcionamiento de los botones de iniciar, pausar, reanudar y reiniciar el cronómetro.
- Retirar los mensajes de depuración que ya no sean necesarios.
- Reactivar la actualización automática del reloj digital.
- Continuar mejorando el diseño visual de la aplicación.
- Registrar los cambios en Git y publicarlos en GitHub.
- Desarrollar el reloj analógico y, posteriormente, el temporizador.


## 5. Estimación inicial

- **Duración prevista:** entre 5 y 8 horas de trabajo efectivo.
- **Fecha y hora de finalización:** pendientes.
- **Tiempo efectivo acumulado:** pendiente de registrar.

La estimación se revisará según las dificultades, las pruebas y el aprendizaje durante el desarrollo.

## 6. Registro de incidencias y aprendizajes

Se anotarán aquí los errores relevantes, sus causas, las soluciones aplicadas y los conceptos aprendidos.

## 7. Cierre del proyecto

Se completará al finalizar la primera versión funcional, incluyendo la fecha y hora final, el tiempo transcurrido, el tiempo efectivo de trabajo y las funcionalidades terminadas.