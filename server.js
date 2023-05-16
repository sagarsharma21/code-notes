var http = require('http');

var server = http.createServer(function(req ,res){
    if(req.url == '/'){

    //set response header
    res.writeHead(200,{'Content-Type':'text/html'})

    res.write('<html><body><h2>Welcome Home</h2><p>This is the Home Page</p></body></html>');
    res.end();}

    else if(req.url == '/login'){
        res.writeHead(200,{'Content-Type':'text/html'})

        res.write('<html><body><h2>Login</h2><p>This is the Login Page</p></body></html>');
        res.end();}
    
        else if(req.url == '/feed'){
            res.writeHead(200,{'Content-Type':'text/html'})
    
            res.write('<html><body><h2>Feed</h2><p>Web Feed</p></body></html>');
            res.end();}
            else if(req.url == '/data'){
                res.writeHead(200,{'Content-Type':'application/json'});
                res.write(JSON.stringify({message:  "Hello World"}));
                res.end();
            }
            
            else{
                res.end('Invalid');}
});
server.listen(6060);
console.log("6060 on");

module.exports = server;
