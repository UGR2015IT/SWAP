## Tema 1 - Introduccion

Este primer tema, de introducción, lo hemos planteado como un caso en el que nos hubieran encargado montar un servidor web para una organización grande.

Aquí podemos optar por uno de dos caminos:
- o comenzar a montar un servidor e instalar el software que creemos necesario, sin un trabajo previo (que puede ser largo y costoso) de planificación
- o bien pararnos a analizar las necesidades reales de la organización, dimensionar el servidor adecuadamente, y solo entonces comenzar a trabajar en la configuración.

Si optamos por la primera opción, tras un trabajo inicial sencillo, luego con mucha seguridad acabaremos desarrollando un trabajo de mantenimiento muy grande... En el momento en que el tráfico crezca a cierto nivel, la máquina resultará insuficiente y no podrá servir a los usuarios como debe.

Si optamos por la segunda opción, tras un trabajo inicial (relativamente complejo), acabaremos configurando de un sistema completo, escalable y con alta disponibilidad que nos asegura dar el servicio que se espera.

Otra cuestión es disponer de una máquina en la que el equipo de desarrollo pruebe nuevos módulos, aplicaciones, etc, y sólo cuando estén bien probados se pasen al servidor de producción.

Así pues, la solución más adecuada cuando haya que hacer frente a un alto tráfico de red y dar servicio a millones de usuarios pasa por hacer una granja web. Puede suponer un trabajo y coste extra, pero tendremos un sistema escalable y con alta disponibilidad.

Finalmente, para terminar la clase, hemos comentado varios casos de desarrollo de sistemas web y los posibles problemas que pueden experimentar. De esos casos, algunos fueron sistemas mal planificados, y otros, aunque bien planificados, sufrieron algún grave problema inesperado (ver los siguientes artículos del Availability Digest:
- [Mizuho Bank](http://www.availabilitydigest.com/public_articles/0606/mizuho_bank.pdf)
- [Simple Fault](http://www.availabilitydigest.com/public_articles/0312/simple_fault.pdf)
