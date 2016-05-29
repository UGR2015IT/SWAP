[Source](http://swap-ugr.blogspot.com.es/2016/04/tema-6-de-teoria-asegurar-el-sistema.html "Permalink to Asegurar el sistema web (SWAP2016)")

# Asegurar el sistema web (SWAP2016)

La seguridad en un sistema web resulta de vital importancia para evitar posibles accesos a las máquinas y a los datos por parte de hackers malintencionados. En un sistema bien asegurado podremos determinar qué ocurre en cada momento y quién ha hecho cada cosa y en qué momento. Un sistema bien configurado nos asegurará los siguientes puntos:  

* La confidencialidad, en el sentido de que las comunicaciones deben ser secretas.
* La integridad, de forma que los mensajes enviados deben ser exactamente los recibidos.
* La disponibilidad de los servicios del sistema (no deben verse afectados por posibles ataques).
  
En este tema tratamos varios conceptos: defensa en profundidad, políticas de seguridad, asegurar el servidor, configuración del cortafuegos, y prácticas de seguridad recomendadas.

El concepto de **_defensa en profundidad_** hace referencia a la configuración de varias capas de defensa para defender el sistema a varios niveles. De esta forma se dificulta el acceso último del hacker malicioso a los servidores, haciendo que sea más probable detectar un ataque, y así evitar que las últimas defensas se vean comprometidas.

El proceso de asegurar el servidor implica establecer _**políticas de seguridad**_, que definen cómo interaccionarán los usuarios con los servidores del sistema web. Las políticas de seguridad definen procedimientos de identificación y acceso, que comprueban si un individuo es reconocido por los sistemas de seguridad. También los privilegios de uso, que definen qué acciones puede llevar a cabo cada tipo de usuario correctamente identificado.

Hemos comentado que se deben **establecer y aplicar políticas a diferentes niveles** y así establecer seguridad a nivel físico (que no lleguen hasta los servidores para robarlos), a nivel de red (evitar el acceso a través de comunicaciones por la red), a nivel de administrador (creando las cuentas de administrador adecuadamente), y a nivel de cuentas de servicios (o aplicaciones).

En el _**proceso de asegurar el servidor**_ debemos eliminar diversos servicios innecesarios y otras fuentes de posibles vulnerabilidades. Concretamente debemos eliminar: características no necesarias, servicios, configuraciones e información de seguridad del servidor. Sólo dejaremos las aplicaciones, servicios y puertos imprescindibles.

Finalmente, una parte importante del proceso de asegurar el servidor es la **_configuración del cortafuegos_**. Este elemento de la red protege el sistema de accesos indebidos, haciendo de guardián del sistema, filtrando el tráfico de red (permitiendo cierto tráfico y denegando el resto). El software de cortafuegos por excelencia es iptables.

Un cortafuegos bien configurado evita el consumo excesivo de recursos, reduciendo el tráfico global que un servidor recibirá, oculta los servidores finales a otras redes, protege los servidores de múltiples ataques, oculta información de los servidores a otras redes, y avisa de posibles ataques justo en el momento en que se producen.

Por último, es importante tener un equipo de ingenieros con dedicación exclusiva a **_investigar temas de seguridad_** del sistema a todos los niveles para estar preparados ante posibles ataques. Estas personas deben conocer los temas relativos a la seguridad así como las vulnerabilidades a nivel de red, de cortafuegos, de sistema operativo y de las aplicaciones en el sistema web. Además, cuando se identifique una vulnerabilidad, los administradores de seguridad deben tomar las medidas de prevención necesarias para evitar que los posibles atacantes la puedan aprovechar.

En clase planteamos los siguientes ejercicios:  

* Ejercicio T6.1: Aplicar con iptables una política de denegar todo el tráfico en una de las máquinas de prácticas. Comprobar el funcionamiento.  

> Aplicar con iptables una política de permitir todo el tráfico en una de las máquinas de prácticas. Comprobar el funcionamiento.  

* Ejercicio T6.2: Comprobar qué puertos tienen abiertos nuestras máquinas, su estado, y qué programa o demonio lo ocupa.  
* Ejercicio T6.3: Buscar información acerca de los tipos de ataques más comunes en servidores web, en qué consisten, y cómo se pueden evitar.  

La entrega de los ejercicios de clase se realizará en una carpeta llamada "trabajos_de_clase" que cada cual mantendréis en vuestro repositorio de la asignatura en github.com