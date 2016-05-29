
[Source](http://swap-ugr.blogspot.com.es/2016/04/tema-4-de-teoria-balanceo-de-carga.html "Permalink to Servidores Web de Altas Prestaciones: Tema 4 de teoría: Balanceo de carga (SWAP2016)")

# Servidores Web de Altas Prestaciones: Tema 4 de teoría: Balanceo de carga (SWAP2016)

En este tema comenzamos viendo cómo hace años se usaban grandes mainframes como servidores de todo tipo. Sin embargo, eran máquinas muy caras, tanto para adquirirlas como para mantenerlas. Esto al desarrollo de la tecnología del _**balanceo de carga**_.

La idea es poner varias máquinas trabajando en paralelo en lugar de una sola máquina muy grande y cara. De esta forma, si una máquina del cluster (grupo o granja) se rompe, se puede sustituir fácilmente, lo que mejora la robustez, y además las tareas se pueden repartir entre grupos de servidores.

El funcionamiento se basa en el uso de un balanceador que reparte el tráfico web entre varios servidores finales.

Hay diversas opciones para configurar un balanceador, tanto en cuanto **dispositivos hardware o software**, realizando las siguientes tareas:  
&nbsp;- comprobar la disponibilidad de los servidores  
&nbsp;- protege de diversos ataques  
&nbsp;- derivar en función del tipo de tráfico

Existe software específico para configurar casi cualquier PC como balanceador, estableciendo diferentes algoritmos de reparto de carga. Como ejemplo de software para configurar el balanceo de carga, cabe destacar:  
&nbsp;- HAProxy  
&nbsp;- ngingx  
&nbsp;- Apache  
&nbsp;- Zen Load Balancer  
&nbsp;- Pirhana  
&nbsp;- Pound  
&nbsp;- Ultra Monkey  
&nbsp;- LVS  
&nbsp;- Local Director (cisco)  
&nbsp;- BIG-IP (F5)  
&nbsp;- NLB (Microsoft)

Entre los dispositivos tipo "caja negra", cabe nombrar aquellos que incluyen el hardware y software necesarios para el balanceo (una especie de PC con un software muy concreto y bien afinado), o bien procesadores específicos (ASIC, application specific integrated circuit) para realizar las tareas de modificación de paquetes. Destacan los fabricantes Cisco Systems, Foundry Networks, Nortel Networks, F5 Networks y Radware.

Todos estos balanceadores permiten el uso de varios **algoritmos de balanceo** de carga diferentes:  
&nbsp;- balanceo basado en turnos (round-robin)  
&nbsp;- balanceo basado en el menor número de conexiones  
&nbsp;- balanceo basado en ponderación  
&nbsp;- balanceo basado en prioridad  
&nbsp;- balanceo basado en tiempo de respuesta  
&nbsp;- combinación de los algoritmos de tiempo de respuesta y menor número de conexiones

Finalmente, existe una tecnología para realizar balanceo de carga global (_**GSLB, global server load balancing**_) de forma que se distribuya la carga entre varios centros de datos. La idea es minimizar los retrasos en las comunicaciones por las distancias entre el usuario y los servidores. Esto tiene la ventaja añadida de que si un centro falla, el tráfico se redirige a otro centro de datos (redundancia). Hay varias formas de implementar el GSLB:  
&nbsp;- Uso del sistema de DNS  
&nbsp;- Redirección HTTP  
&nbsp;- GSLB basado en DNS  
&nbsp;- GSLB usando protocolos de enrutamiento

A pesar de la alta disponibilidad que se obtiene usando GSLB, se trata de un sistema muy complejo de implementar. Un problema añadido es mantener el almacenamiento (BD, p.ej.) sincronizado entre los diversos centros de datos.

Como resumen, el balanceo de carga aporta diversos beneficios:  

* Escalabilidad: El balanceador distribuye las peticiones de los usuarios entre varios servidores reales, haciendo que la capacidad global de proceso y servicio crezca respecto a un solo servidor.
* Disponibilidad: El balanceador monitoriza el estado de los servidores y las aplicaciones, de forma que si encuentra que uno de los servidores ha fallado, dejará de enviarle peticiones.
* Mantenimiento: El administrador puede apagar una máquina para actualizarla o repararla, y el resto del conjunto seguirá dando el servicio. Posteriormente, la máquina se puede añadir de nuevo cuando vuelva a estar operativa. Además, podemos tener grupos de máquinas configuradas para dar un tipo de servicio (FTP, HTTP, SMTP, etc).
* Seguridad: Puede ser una primera línea de defensa, rechazando varios tipos de ataques. Además, al hacer NAT, protege los servidores finales de accesos desde el exterior.
* Calidad de servicio: Nos referimos al tiempo de respuesta, a la disponibilidad o a la capacidad de ofrecer servicios en función del tipo de usuario.
  
En clase planteamos los siguientes ejercicios:  

* Ejercicio T4.1: Buscar información sobre cuánto costaría en la actualidad un mainframe. Comparar precio y potencia entre esa máquina y una granja web de unas prestaciones similares.
* Ejercicio T4.2: Buscar información sobre precio y características de balanceadores hardware específicos. Compara las prestaciones que ofrecen unos y otros.
* Ejercicio T4.3: Buscar información sobre los métodos de balanceo que implementan los dispositivos recogidos en el ejercicio 4.2
* Ejercicio T4.4: Instala y configura en una máquina virtual el balanceador ZenLoadBalancer. Compara con la dificultad de la instalación y configuración usando nginx o haproxy (práctica 3).
* Ejercicio T4.5: Probar las diferentes maneras de redirección HTTP. ¿Cuál es adecuada y cuál no lo es para hacer balanceo de carga global? ¿Por qué?
* Ejercicio T4.6: Buscar información sobre los bloques de IP para los distintos países o continentes. Implementar en JavaScript o PHP la detección de la zona desde donde se conecta un usuario.
* Ejercicio T4.7: Buscar información sobre métodos y herramientas para implementar GSLB.
  
La entrega de los ejercicios de clase se realizará en una carpeta llamada "trabajos_de_clase" que cada cual mantendréis en vuestro repositorio de la asignatura en github.com  