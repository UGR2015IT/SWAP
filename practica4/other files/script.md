Podria ser util usar dicho script para ejecutar multiplas medidas:

#### Script AB

```
#!/bin/sh
for i in 1 2 3 4 5 6 7 8 9 10
do
    ab -n 10000 -c 20 http://server/page.html > AB_$i.txt
done
```

#### Script SIEGE

```
#!/bin/sh
for i in 1 2 3 4 5 6 7 8 9 10
do
    siege -b -t20S http://192.168.210.128/ > siege_$i.txt
done
```