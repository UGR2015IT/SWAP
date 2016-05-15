// Module dependencies.
var application_root = __dirname,
    express = require( 'express' ); //Web framework

//Create server
var app = express();

// Configure server
app.configure( function() {
    //parses request body and populates request.body
    app.use( express.bodyParser() );
    //checks request.body for HTTP method overrides
    app.use( express.methodOverride() );
    //perform route lookup based on url and HTTP method
    app.use( app.router );
    //Show all errors in development
    app.use( express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.get( '/api/uno', function( request, response ) {
    response.send("cadena UNO");
});

app.get( '/api/dos/:id', function( request, response ) {
    //response.send("cadena 2");
    response.send('valor pasado=[' + request.params.id+']');
});

app.get( '/api/tres', function( request, response ) {
    var v1 = request.query.v1;
    var v2 = request.query.v2;
    response.send('valores= ['+v1+']['+v2+']');
});


var port = 4711;
app.listen( port, function() {
    console.log( 'Express server listening on port %d in %s mode', port, app.settings.env );
});
