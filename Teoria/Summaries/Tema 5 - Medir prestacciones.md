
[Source](http://swap-ugr.blogspot.com.es/2016/04/tema-5-de-teoria-medir-prestaciones.html "Permalink to Servidores Web de Altas Prestaciones: Tema 5 de teoría: Medir prestaciones (SWAP2016)")

# Servidores Web de Altas Prestaciones: Tema 5 de teoría: Medir prestaciones (SWAP2016)

Tras configurar un sistema, del tipo que sea, debemos comprobar que dará las prestaciones esperadas. En este tema hemos explicado qué procesos y herramientas debemos usar para llevar a cabo la medición de prestaciones.

Como comentamos, no se trata de detectar posibles caídas o errores de programación, sino los problemas de rendimiento y degradación de prestaciones que puedan darse en el sistema cuando esté en producción. Buscamos los posibles cuellos de botella e ineficiencias antes de ponerlo en marcha de cara a los usuarios finales.

Para llevar a cabo estas tareas debemos tener en cuenta la dificultad que supone hacer pruebas en un entorno de producción, así como la imposibilidad de simular el comportamiento de los usuarios.

Habitualmente se utilizan tres métricas:  

* Conexiones por segundo: número de conexiones de entrada que cierto dispositivo puede manejar por segundo (transacciones por segundo o sesiones por segundo).
* Número total de conexiones concurrentes: sesiones de usuario TCP que puede manejar el balanceador al mismo tiempo.
* Rendimiento (en bits por segundo): velocidad a la que un dispositivo maneja el tráfico; se mide en bits por segundo y es la combinación del "tamaño del paquete" y de los "paquetes por segundo".
  
Hemos estudiado que existe un límite del tráfico de red que produce una degradación en las prestaciones. Si se alcanza ese límite en un sistema, los tiempos de respuesta en las conexiones HTTP se degradan completamente, haciendo imposible la conexión. Es importante monitorizar el sistema para detectar este comportamiento, que se ve claramente en gráficas como las que siguen:

![tema5][./tema5.png]  

  
Cuando se alcanza el límite y el sistema deja de responder como se espera, las prestaciones caen (el sistema deja de dar su servicio).

Finalmente, para determinar cómo evolucionan las prestaciones del sistema se suelen utilizar herramientas que generan carga al sistema (tráfico de red). Se suelen usar benchmarks como SPECweb o WebStone para simular un número determinado de clientes.

Existen otras herramientas de simulación de carga que podemos usar en cualquier máquina, como por ejemplo:  

* Apache Benchmark
* httperf
* OpenWebLoad
* The Grinder
* OpenSTA
* Jmeter
* siege
* Webstone (Mindcraft)
&nbsp;  
Todas ellas permiten comprobar el rendimiento de cualquier servidor web (Apache, MS Internet Information Services -IIS-, nginx, Cherokee, Tomcat, lighttpd, thttpd, etc) para comprobar el rendimiento del hardware, software o de alguna modificación en la configuración que hayamos hecho.

También tenemos la opción de encargar a una empresa externa especializada la aplicación de estas cargas y el análisis de los resultados. Como ejemplos, cabe destacar:  

* Micro Focus Intl. - Segue Software (SilkPerformer)
* HP (LoadRunner)
* Micro Focus Intl. - Compuware (QALoad)
* Rational (SiteLoad)
* Radview (WebLoad)
  
Lo que hacen son diferentes tipos de pruebas a los servidores para comprobar su funcionamiento en diferentes condiciones:  

* Humo (Smoke): pruebas preliminares para comprobar que el sistema está listo para los siguientes tests.
* Carga (Load): cargas lo más parecidas a la real ejecutadas en periodos cortos (1h), para determinar los tiempos de respuesta que tendrán los usuarios.
* Capacidad (Capacity): actividad creciente hasta detectar el punto de saturación.
* Estrés (Stress): para analizar el efecto de aplicar de forma continuada una carga por encima de la capacidad del sistema.
* Sobrecarga (Overload): aplicar fuertes picos de carga durante cortos periodos.
* Estabilidad (Stability): cargas lo más similares posibles a la real, aplicadas durante 1 día o 1 semana.
  
Es importante recoger todos los datos posibles durante la ejecución de estas pruebas para poder determinar lo que está ocurriendo en el sistema en cada momento y cómo reacciona éste en función de la carga introducida, ya sean medidas de la calidad del servicio del sistema (estadísticas que calcula la herramienta de generación de carga) o medidas del consumo de recursos del sistema (utilizando herramientas del sistema operativo).

En clase planteamos los siguientes ejercicios:  

* Ejercicio 5.1: Buscar información sobre cómo calcular el número de conexiones por segundo.
* Ejercicio 5.2: Instalar wireshark y observar cómo fluye el tráfico de red en uno de los servidores web mientras se le hacen peticiones HTTP.
* Ejercicio 5.3: Buscar información sobre herramientas para monitorizar las prestaciones de un servidor.
La entrega de los ejercicios de clase se realizará en una carpeta llamada "trabajos_de_clase" que cada cual mantendréis en vuestro repositorio de la asignatura en github.com
  