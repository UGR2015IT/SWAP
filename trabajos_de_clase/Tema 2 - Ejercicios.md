#### Ejercicio T2.1: Calcular la disponibilidad del sistema si tenemos dos replicas de cada elemento (en total 3 elementos en cada subsistema).

web2=85% + ((1-85%)*85%)=97.75%
web3=97.75% + ((1-97.75%)*85%)=99.6625%

application2=90% + ((1-90%)*90%)=99%
application3=99% + ((1-99%)*90%)=99.9%

DB2=99.9% + ((1-99.9%)*99.9%)=99.9999%
DB3=99.9999% + (1-99.9999%)*99.9%)=99.9999999%

DNS2=98% + ((1-98%)*98%)=99.96%
DNS3=99.96% + ((1-99.96%)*98%)=99.9992%

Firewall2=85% + ((1-85%)*85%)=97.75%
Firewall3=97.75% + ((1-97.75%)*85%)=99.6625%

Switch2=99% + ((1-99%)*99%)=99.99%
Switch3=99.99% + ((1-99.99%)*99%=99.9999%

DC2=99.99% + ((1-99.99%)*99.99%)=99.999999%
DC3=99.999999% + ((1-99.999999%)*99.99%)=99.9999999999%

ISP2=95% + ((1-95%)*95%)=99.75%
ISP3=99.75% + ((1-99.75%)*95%)=99.9875%

TOTAL=99.6625%*99.9%*99.9999999%*99.9992%*99.6625%*99.9999%*99.9999999999%*99.9875%=99.2135165% 

#### Ejercicio T2.2: Buscar frameworks y librerías para diferentes lenguajes que permitan hacer aplicaciones altamente disponibles con relativa facilidad. Como ejemplo, examina PM2: https://github.com/Unitech/pm2 que sirve para administrar clústeres de NodeJS.

_Docker_: permite la automatizacion del desplegamiento di contenidores de software, es decir permitiendo una escalabilidad super sencilla y potente. Cada contenedor ejecuta procesos de manera aislada, de manera que tareas diferentes se consiguan en maquinas virtuales (contenidores) y permitiendo una _plataforma como servicio_.

_PM2_: permite de desplegar una aplicacion escrita en node.js en produccion de manera que continue corriendo y que se reinicie en caso de caida. Tambien se usa para lanzar instancias diferentes de un mismo nodo (app de node.js) y controlar los estados.

#### Ejercicio T2.3: ¿Cómo analizar el nivel de carga de cada uno de los subsistemas en el servidor? Buscar herramientas y aprender a usarlas.

Nagios. Es un sistema de monitorización de máquinas y servicios. Funciona es Linux y es open source. Permite: monitorización, alta visibilidad, notificaciones, resolución proactiva, reportes, arquitectura modular y redundancia de hosts.

Cacti. Este sistema nos permite monitorizar y visualizar gráficas de toda la información de nuestro servidor y su red.

Munin. Programa de monitorización de servidores que proporciona estadísticas de todos los recursos y servicios del servidor. Utiliza una interfaz web para mostar todas las informacciones.


#### Ejercicio T2.4: Buscar diferentes tipos de productos: (1) Buscar ejemplos de balanceadores software y hardware (productos comerciales). (2) Buscar productos comerciales para servidores de aplicaciones. (3) Buscar productos comerciales para servidores de almacenamiento.

1.1 Balanceadores SW: LVS (nativo de Linux), Nginx, ZenLoad
1.2 Balanceadores HW: familia LoadMaster (p.e. LM-2600), familia F5 
2 Balanceo nivel de aplicacion: Java implementa ya un balanceo de carga a nivel de aplicacion, bien basado en la _cookie-injection_ o bien por redireccion HTTP. Nginx tambien permite un "_layer 7 load balancing_" (balanceo de carga de nivel 7) con paso de mensaje. Como producto comercial el Barracuda Load Balancer ADC (permite _offroad SSL_, _Caching HTTP_, y _routing de contenidos_.
3 Balanceo nivel de almacenamiento: familia Netgear ReadyNAS por ejemplo