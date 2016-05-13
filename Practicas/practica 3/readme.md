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

![exitoP3](./images/exito.png)

Probamos ahora el funcionamiento con algoritmo en ponderacion, con la prioridad de la maquina M2 dos veces la de M1. Serà suficiente insertar las siguientes lineas en el mismo fichero _/etc/nginx/conf.d/default.conf_ :

        upstream apaches {
            server 192.168.210.128 weight=1;
            server 192.168.210.129 weight=2;
        }

![exitoP3](./images/exitonginxweight.png)
