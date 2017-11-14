/*var express = require("express");
var app = express();
*/

/*app.get('/', (request, response) => response.send('Hello world'));
app.get('/about', (request, response) => response.send('Created by ...'));
app.get('/user/:name', (request, response) => response.send('Hello ' + request.params.name));
*/

/*app.use(express.static('www'));

app.listen(1337);*/

/*
http.createServer(function(request, response){
	response.writeHead(200, {
		'Content-Type': 'text/plain'
	});
	response.write('hello World!');
	response.end();
	console.log("Node.js server running on port 1337.");
}).listen(1337);
*/

var express = require("express");
var app = express();
//var	http = require("http").Server(app).listen(80);
var upload = require("express-fileupload");
app.use(upload());

console.log("Let's go");

app.get('/',function(req,res){
		res.sendFile("/Cordova/TheVoiceProject/www/upload_page.html");
});
app.post("/",function(req,res){
	if(req.files){
		var file = req.files.filename,
			filename = file.name;
		file.mv("www/img/"+filename,function(err){
			if(err){
				console.log(err)
				res.send("error occured")
			}
			else{
				res.send("Okayyyyyyyy!!!")
			}
		})
	}
});
app.listen(80);
