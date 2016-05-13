El diseño y construcción de una red segura y escalable es fundamental para cualquier servidor. Si la red no está bien estructurada, los servidores no podrán servir la información como deben. Así pues, el administrador del sistema debe analizar las opciones de conexión a Internet y diseñar la estructura de red, separando las subredes corporativas y también conectando a redes privadas de proveedores.

Todas estas decisiones de diseño implican un estudio del hardware (switch, hub, router, balanceador, etc) y aplicaciones software disponibles (sistema operativo, monitorización, balanceo, etc) para realizar una configuración de la red adecuada, eligiendo el modelo de red más adecuado, el hardware, estructurando la red aislando subredes, y definiendo los puntos de entrada a las diferentes subredes.

En este sentido, es importante configurar una zona restringida, aislada y totalmente controlada (llamada DMZ, demilitarized zone) para controlar los servicios y aplicaciones ofrecidos a otras redes externas. Aunque existen diversas configuraciones, la más adecuada es la de DMZ doble, cuya organización se muestra a continuación: 

[Immagine teoria 3](http://4.bp.blogspot.com/-C-s7tuVt7u0/VQK6B7WUSaI/AAAAAAAACKE/7YfqZmi9KzM/s1600/jgfhhbgg-755217.)

Esta configuración tiene las siguientes características:
El DMZ tiene un front-rail y un back-rail.
El delantero es un segmento de red conectado a Internet.
Los servidores quedan protegidos con el cortafuegos.
El trasero está conectado a la subred interna (segura), y protegido con otro cortafuegos.

En la figura anterior vemos que algunas máquinas están conectadas al fron-rail y back-rail (necesitan doble tarjeta de red para acceder a Internet y servidores internos). Otras están conectadas sólo al front-rail (necesitan sólo una tarjeta de red para ofrecer servicios sólo hacia Internet y sus servicios quedan aislados) o sólo al back-rail (necesitan sólo una tarjeta de red, no tienen acceso a Internet, y dan servicios a las redes corporativas/seguras).

Finalmente, hacia el final del tema hemos visto que la calidad de la conexión a Internet depende de varios factores: calidad del servicio y ancho de banda, filtrado y bloqueo de paquetes, y network address translation.


En clase planteamos los *siguientes ejercicios*:
- Ejercicio T3.1: Buscar con qué órdenes de terminal o herramientas gráficas podemos configurar bajo Windows y bajo Linux el enrutamiento del tráfico de un servidor para pasar el tráfico desde una subred a otra.
- Ejercicio T3.2: Buscar con qué órdenes de terminal o herramientas gráficas podemos configurar bajo Windows y bajo Linux el filtrado y bloqueo de paquetes.
La entrega de los ejercicios de clase se realizará en una carpeta llamada "trabajos_de_clase" que cada cual mantendréis en vuestro repositorio de la asignatura en github.com