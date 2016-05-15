#### Practica 4 - Rendimiento de servidores web

##### Seccion 0: Installacion de herramientas

Para esta practica vamos a tomar medidas de diferentes configuraciones de granja web a traves de diferentes herramientas: en particular, utilizaremos _ab (Apache Benchmark)_, _Siege_, y _OpenWebLoad_.

```
apt-get install apache2-utils siege openwebload
```

Las tres configuraciones que vamos a comparar son las de servidor unico, granja con nginx como LB, granja con haproxy como LB.

##### Seccion 1: _Apache benchmark_

###### Seccion 1.1: servidor unico

Como primera etapa, intentamos la comprobacion de rendimiento de la maquina _M1@192.168.210.128_ con la herramienta AB.

```
ab -n 1000 -c 10 http://192.168.210.128/index.html
```

[!singleAB_1](./images/singleAB_1.png)
[!singleAB_2](./images/singleAB_2.png)

Para tener medidas apropriadas, vamos a tomar las mediciones mas de una vez, en particular 7 veces, cada una pedendo la pagina 10000 veces con concurrencia 20 y obtenemos la siguiente tabla:

[!tablaSingleAB](./images/tablaSingleAB.png)

##### Seccion 2: _Siege_

###### Seccion 2.1: servidor unico

Como primera etapa, intentamos la comprobacion de rendimiento de la maquina _M1@192.168.210.128_ con la herramienta _Siege_.

```
siege -b -t20S -v http://192.168.210.128/
```

[!singleSiege](./images/singleSiege.png)

Para tener medidas apropriadas, vamos a tomar las mediciones mas de una vez, en particular 10 veces y obtenemos la siguiente tabla:

[!tablaSingleSiege](./images/tablaSingleSiege.png)

##### Seccion 3: _OpenWebLoad_

###### Seccion 3.1: servidor unico

Como primera etapa, intentamos la comprobacion de rendimiento de la maquina _M1@192.168.210.128_ con la herramienta _Siege_.

```
openload -l 20 http://192.168.210.128/ 1000
```

Para tener medidas apropriadas, vamos a tomar las mediciones mas de una vez, en particular 10 veces y obtenemos la siguiente tabla:

[!tablaSingleOpenWebLoad](./images/tablaSingleOpenWebLoad.png)