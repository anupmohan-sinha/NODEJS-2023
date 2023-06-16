//Http Server
//"http" is the predefined module in nodejs, used to create the Http Server
//no need to download http module
//http module already available along with the node software


//import module (http module)
//require() function used to import the module

let http = require("http");

//createServer() is the function in http module, helps to create the http server

let server = http.createServer((req, res) => {
    // res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<h1>welcome to http server</h1>");
    res.end(); //locking the response object
});

server.listen(8080);
console.log('server listening the port no. 8080');