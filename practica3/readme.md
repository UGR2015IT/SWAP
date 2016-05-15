#### Practica 3 - Balanceo de Carga: _nginx_, _haproxy_

##### Seccion 1: _Nginx_

Para esta practica, hemos arrancado una tercera maquina (M3@192.168.210.130) en la que hemos instalado el servicio _nginx_. Esta maquina M3 va a trabajar como balanceador de carga para el cluster hecho por las maquinas M1@192.168.210.128 y M2@192.168.210.129.

Empezamos configurando el servicio _nginx_ modificando el fichero de configuracion _/etc/nginx/conf.d/default.conf_ de manera que sepa la granja con la que tiene que trabajar:

        upstream apaches {
            server 192.168.210.128;
            server 192.168.210.129;
        }
        server {
            listen 80;
            server_name balanceador;
            access_log /var/log/nginx/balanceador.access.log;
            error_log /var/log/nginx/balanceador.error.log;
            root /var/www/;
            location /
            {
                proxy_pass http://apaches;
                proxy_set_header Host $host;
                proxy_set_header X-Real-IP $remote_addr;
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                proxy_http_version 1.1;
                proxy_set_header Connection "";
            }
        }

![default.conf](./images/nginx-defaultconf.png)

Una vez reiniciado el servicio de _nginx_, el balanceador empieza a redireccionar el trafico que llega a el mismo a las dos maquinas de la granja repartendolo por turnos (round-robin). Esto se puede comprobar hacendo una descarga de las paginas web de las dos maquinas que, si modificadas previamente, seran distintas.

        curl http://192.168.210.130
    curl http://192.168.210.130

![exitoP3](./images/exitonginx.png)

Probamos ahora el funcionamiento con algoritmo en ponderacion, con la prioridad de la maquina M2 dos veces la de M1. Serà suficiente insertar las siguientes lineas en el mismo fichero _/etc/nginx/conf.d/default.conf_ :

        upstream apaches {
            server 192.168.210.128 weight=1;
            server 192.168.210.129 weight=2;
        }

![exitoP3](./images/exitonginxweight.png)

##### Seccion 2: _Haproxy_

Arrancamos una maquina virtual M31@192.168.210.132 que tiene instalado haproxy. Configuramos el fichero _/etc/haproxy/haproxy.cfg_:

    global
        daemon
        maxconn 256
    defaults
        mode http
        contimeout 4000
        clitimeout 42000
        srvtimeout 43000
    frontend http-in
        bind *:80
        default_backend servers
    backend servers
        server m1 172.16.168.130:80 maxconn 32
        server m2 172.16.168.131:80 maxconn 32

![confighaproxy](./images/exitonginx.png)

y comprobamos que todo funcione bien:

![exitohaproxy](./images/exitohaproxy.png)

Es posible configurar la granja para que la maquina M2 tenga mas peso que la M1, y comprobamos esta configuracion:

    backend servers
        server m1 172.16.168.130:80 maxconn 32 weight 1
        server m2 172.16.168.131:80 maxconn 32 weight 2

![confighaproxyweight](./images/confighaproxyweight.png)


![exitohaproxyweight](./images/exitohaproxyweight.png)
