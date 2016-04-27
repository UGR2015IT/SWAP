// La aplicación recibe un parámetro llamado "number". 
// Devuelve un número aleatorio que esté entre 0 y este parámetro.

var http = require("http");
var url = require("url");

http.createServer(function(request, response) {
     response.writeHead(200, {"Content-Type": "text/plain"});

     var params = url.parse(request.url, true).query;
     var input = params.number;

     var numInput = new Number(input);
     var numOutput = new Number(Math.random() * numInput).toFixed(0);
     
     response.write(numOutput);
     
     response.end();
}).listen(8080);

console.log("Random Number Generator Running...");


// guardamos el código en un archivo llamado "random.js"
// Para comenzar esta aplicación y ejecutarla (creando así el servidor HTTP y escuchando las conexiones en el puerto 8080) ejecutamos:   node random.js
// Ahora accedemos desde un navegador a la URL:   http://localhost/?number=27.
// Y nos devolverá el número aleatorio generado entre 0 y 27.

