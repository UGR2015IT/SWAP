// Setting up vars and requires
var cluster = require('cluster'),
    http = require ('http');
    
    
// Defining master and workers    
if (cluster.isMaster) {
    
    // Set up number of CPUs
    var numCPUs = require('os').cpus().length;
    
    // Fork workers.
    for (var i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    Object.keys(cluster.workers).forEach(function(id) {
        console.log("I am running with ID : "+cluster.workers[id].process.pid);
    });

    cluster.on('exit', function(worker, code, signal) {
        console.log('worker ' + worker.process.pid + ' died');
    });
} else {
    var express = require('express'),
        app = express();
    
    // Setting up routes
    app.use(express.static(__dirname + '/public'));
    app.set('views',__dirname+'/views');
    app.set('view engine','ejs');

    app.get('/',function(req,res){
        res.render('index',function(err,html){
            res.send(html);
        })
    });
    http.createServer(app).listen(3000);
}