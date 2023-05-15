var http = require('http');

var server = http.createServer(function(req ,res){
    if(req.url == '/'){

    //set response header
    res.writeHead(200,{'Content-Type':'text/html'})

    res.write('');
    res.end();}

    else if(req.url == '/login'){
        res.writeHead(200,{'Content-Type':'text/html'})

        res.write('Welcome to Login');
        res.end();}
    
        else if(req.url == '/feed'){
            res.writeHead(200,{'Content-Type':'text/html'})
    
            res.write('Feed page');
            res.end();}
            else{
                res.end('Invalid');}
});
server.listen(6060);
console.log("6060 on");

module.exports = server;