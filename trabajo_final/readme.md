# Node.js : javascript lado servidor

Presentacion hecha por:
- Davide Gallitelli
- Juan Ramon Mossa

## Algunas informacciones generales



## Etapas para instalar un servidor Node.js en Ubuntu

Aqui voy a describir las etapas para instalar un servidor node.js de aplicaciones 
    
    sudo apt-get install git -y
    curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
    sudo apt-get install -y nodejs build-essential
    
Si ya no resulta instalado, instalar _npm_, gestór de paquetes:

    sudo apt-get install npm -y
    
Fundamental, para desarrollar correctamente aplicaciones web sin volver locos con dependencias y inclusiones, es instalar _bower_:

    sudo npm install bower -g
    
Ahora creamos el directorio donde queremos tener nuestra aplicacion, llamada _myapp_:

    mkdir myapp
    cd myapp
    
Y inicializamos el directorio con _npm_ que crearà automaticamente el fichero _myapp/package.json_ con todas la dependencias y detalles de la aplicacion:

    npm init
    
Muy importante en esa etapa es poner un _entry point_ de la aplicacion, cuando eso es pedido por la consola:

    entry point: app.js
    
Además, resultaría utíl instalar _express_, framework para aplicaciones web con muchas funcionalidades para crear SPA (Single-Page Applications) y aplicaciones a paginas multiplas o soluciones ibridas.

    npm install express --save
    npm install express
    
Para ejecutar la nuestra aplicacion ejecutamos en consola:

    node app.js
    
NB: puede pasar que node no se ponga en el $PATH automaticamente. Si pasa esto, es suficiente ejecutar la orden

    ln -s /usr/bin/nodejs /usr/bin/node
    
### Express application generator

El modulo _express_ proporciona una herramienta de creacion de esqueleto de aplicacion a través de _express-generator_

    npm install express-generator -g
    
Una vez instalado, es suficiente teclar en consola (ejecutar **express -h** para la ayuda de la orden):

    express myapp
    
y _express-generator_ crea automaticamente la estructura de la aplicacion. Ahora ejecutamos las ordenes:

    cd myapp
    npm install 
    DEBUG=myapp:* npm start
    
y será posible ver la aplicacion cargando la dirección [localhost:3000](http://localhost:3000/).

La configuracion por defecto de express-generator es crear un esqueleto de aplicacion basada en _jade_. Si en crear la aplicacion se añade el parametro **-e** o **--ejs**, se pasa el suporto al motor ejs, ideal para _Typescript_ y entonces aprovechar de front-end framework como Angular 2. Para mas detalles, seguir esta [guía](http://goo.gl/d4Wkw5). Buscar también mas informaciones sobre "MEAN Stack".

