#### Ejercicio T3.1: Buscar con qué órdenes de terminal o herramientas gráficas podemos configurar bajo Windows y bajo Linux el enrutamiento del tráfico de un servidor para pasar el tráfico desde una subred a otra. 

Como órdenes de terminal en linux se usa route, la sintaxis del que es:
        route operación [tipo] destino enrutador saltos
Por ejemplo:
route add -net 165.255.0.0/16 gw 192.168.1.1 dev eth0

En Windows Server hay la herramienta "Enrutamiento y servicio remoto

#### Ejercicio T3.2: Buscar con qué órdenes de terminal o herramientas gráficas podemos configurar bajo Windows y bajo Linux el filtrado y bloqueo de paquetes. 

La orden ideal en Linux para configurar filtrado y bloqueo de paquetes es la orden _iptables_. Es posible a travez de esta orden rechazar todos los paquetes entrantes y salientes, y luego permitir solo unos especificos, como por ejemplo lo de HTTP (puerto 80), de SSH (puerto 22) o de HTTPS (puerto 443).

En windows server es posible hacer un filtrado de paquetes a traves de la herramienta "_Routing and Remote Access_" y configurar filtros de entrada o de salida, bien por ip y bien por puertos.