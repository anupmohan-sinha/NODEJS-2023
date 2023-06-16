//import http module

let http = require('http');

//import url module
//url module to read the query parameters
//url module also predefined module
//url module available along with the node software

let url = require('url');
let server = http.createServer((req, res) => {
    //MIME Type
    //communication language between client and server called as MIME

    res.writeHead(200, {'Content-Type': 'text/html'});
    

    //parse the request
    let obj = url.parse(req.url, true).query; // to read/parse the url we need to pass a flag boolean value (true)
    if (obj.uname === 'anup' && obj.upwd === 'mohan') {
        res.write("<h1>Login Success! </h1>");
    } else {
        res.write("<h2>Login Fail.</h2>")
    }
    res.end();
});

server.listen(8080);
console.log('server listening the port number 8080');
