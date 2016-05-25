// Setting up vars and requires
var http = require ('http'),
    express = require('express'),
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
