"use strict";
//http:localhost:8080/login?uname=admin&upwd=admin
exports.__esModule = true;
//import express module
var express = require("express");
//use of app object is to create rest services GET, POST, PUT, DELETE, ...
var app = express();
//authorization
var auth = function (req, res, next) {
    var allHeaders = req.headers;
    if (allHeaders.token === "anupMohan") {
        next();
    }
    else {
        res.status(500).json({ auth: 'fail' });
    }
};
//get request - authentication
app.get('/login', function (req, res) {
    if (req.query.uname === 'admin' && req.query.upwd === 'admin') {
        res.status(200).json({ login: 'login successful!' });
    }
    else {
        res.status(400).json({ login: 'fail again' });
    }
});
//default request
app.get("/", function (req, res) {
    res.sendFile('E:/Home/Github/NODEJS-2023/getparameters/index.html');
});
app.listen(8080, function () {
    console.log('server started here!');
});
