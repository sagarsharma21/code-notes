//index.js file

var myServer = require('http');

myServer.createServer(function(req,res){
    res.write("Connected to server!");
    res.end();
}).listen(8080);
console.log("Server is running on port 8080!"+"\n"+"Connect to http://localhost:8080/");