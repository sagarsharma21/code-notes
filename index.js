//index.js file

var myServer = require('http');

myServer.createServer(function(req,res){
    res.write("Connected to server!");
    res.end();
}).listen(8070);
console.log("Server is running on port 8080!"+"\n"+"Connect to http://localhost:8080/");

//example of an anonymous function
console.log("OK");

var mod = require('./Log.js');
mod.info('Node.js started');

var msg = require('./app.js');
console.log(msg);

var member = require('./app.js')
console.log(member.firstname+' '+member.lastname)


//example to read a text file using fs module   
var fs = require('fs');

// fs.readFile('textfile.txt', (err,data) => {
//     if (err) throw err
//     console.log(data);
// });

fs.readFile('textfile.txt', function (err, data) {
    if (err) 
        throw err;

//    console.log(data);
});

