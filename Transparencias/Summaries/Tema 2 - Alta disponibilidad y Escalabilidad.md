Esta semana hemos comenzado el segundo tema de la teoría (no lo llegamos a terminar en la sesión de teoría del martes), en el que centraremos el estudio en los conceptos de _disponibilidad_ y _escalabilidad_.

Para casi cualquier empresa resulta de suma importancia mantener su presencia en internet para ofrecer diversos servicios a los usuarios. Es por esto que nuestros servidores deben estar disponibles todo el tiempo que podamos (24/7).

Sin embargo, ningún sistema, por bien administrado que esté, está libre de sufrir caídas. Ese tiempo en que la máquina no dará servicio supone lo que se llama un problema de no-disponibilidad, que puede ser de dos tipos: tiempo de no-disponibilidad programado  o  tiempo de no-disponibilidad no programado.

Lo ideal es que sólo hubiera "tiempos de no-disponibilidad programados" y además, lo más cortos posibles, y siempre planificados y controlados por los administradores (actualizaciones del SO, de aplicaciones o de hardware). Sin embargo, el sistema tarde o temprano acaba sufriendo "tiempos de no-disponibilidad no-programados", debidos a ataques o fallos.

La forma de calcular la disponibilidad de un sistema se basa en la "escala punto nueve":
> 100 – (tiempoCaido / periodoTiempo) * 100

Lo habitual es referirlo al periodo de un año, y actualmente los grandes sitios web se conforman con tener un 99.9% (8.76 horas de caída al año) ó 99.99% (52.56 minutos de caída al año).

Para ampliar esta parte, merece la pena leer con atención el artículo disponible en: 
[In search of five 9s](http://www.edgeblog.net/2007/in-search-of-five-9s/)

Existen estrategias y mejoras del sistema para mejorar la disponibilidad. Básicamente se trata de usar subsistemas redundantes y monitorizarlos todo el tiempo. Otra opción es configurar los servidores con redundancia mediante el software (p.ej. balancear servidores).

Por otro lado, la _escalabilidad_ es un concepto que hace referencia a cómo el sistema maneja la carga, así como al esfuerzo para adaptarse a nuevos niveles de carga, que pueden deberse a:
 - Cambios en las aplicaciones
 - Fallos o caídas de algunas partes del sistema
 - Incremento del número de máquinas
 - Incremento repentino del número de usuarios del sitio

Para manejar adecuadamente esos diferentes niveles de carga se pueden añadir más recursos al sistema web (actualizar o mejorar el hardware, p.ej.). Sin embargo, si tras mejorar el hardware (puede suponer un coste alto) más adelante llegan cargas mayores, puede quedarse pequeño de nuevo, teniendo finalmente que reestructurar el sistema completo.

Existen dos tipos de escalado:
 - Ampliación vertical, que supone mejorar o incrementar alguna parte del hardware (RAM, CPU, disco de un servidor, etc).
 - Ampliación horizontal, que supone añadir máquinas a algún subsistema (servidores web, servidores de datos, etc).


Finalmente, en cualquier sistema resulta primordial analizar continuamente la carga para detectar a tiempo posibles sobrecargas. Así, si la CPU está cerca del 100% todo el rato y el resto de subsistemas no está sobrecargado, puede ser suficiente con sustituir la CPU antigua por una más potente. Si el uso de RAM es muy alto, veremos un uso alto de disco (por swapping), por lo que incrementando la cantidad de RAM mejorará el rendimiento. Además, un ancho de banda muy bajo puede afectar al rendimiento, y simplemente incrementándolo (contratando una mejor conexión) será suficiente para mejorar las prestaciones del sistema.

Como se comentó en el Tema 1, el escalado más adecuado de un sistema web que debe aceptar altas cargas pasa por configurar una granja web con balanceo de carga. Será un proceso complejo y habrá que preparar las aplicaciones, configurar la red para soportar un tráfico creciente, y configurar el balanceo de carga entre diversos servidores, pero será la forma en que nuestro sistema será escalable y tendrá alta disponibilidad.


En clase planteamos los siguientes ejercicios:
> Ejercicio T2.1: Calcular la disponibilidad del sistema descrito en edgeblog.net si en cada subsistema tenemos en total 3 elementos.
> Ejercicio T2.2: Buscar frameworks y librerías para diferentes lenguajes que permitan hacer aplicaciones altamente disponibles con relativa facilidad. Como ejemplo, examina PM2: https://github.com/Unitech/pm2 que sirve para administrar clústeres de NodeJS.
> Ejercicio T2.3: ¿Cómo analizar el nivel de carga de cada uno de los subsistemas en el servidor? Buscar herramientas y aprender a usarlas.
> Ejercicio T2.4: Buscar diferentes tipos de productos: (1) Buscar ejemplos de balanceadores software y hardware (productos comerciales). (2) Buscar productos comerciales para servidores de aplicaciones. (3) Buscar productos comerciales para servidores de almacenamiento.

La entrega de los ejercicios de clase se realizará en una carpeta llamada "trabajos_de_clase" que cada cual mantendréis en vuestro repositorio de la asignatura en github.com
