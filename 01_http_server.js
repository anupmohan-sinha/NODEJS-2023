//Http Server
//"http" is the predefined module in nodejs, used to create the Http Server
//no need to download http module
//http module already available along with the node software


//import module (http module)
//require() function used to import the module

let http = require("http");

//createServer() is the function in http module, helps to create the http server

let server = http.createServer((req, res) => {});