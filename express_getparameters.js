"use strict";
//read get parameters in expressjs
exports.__esModule = true;
/* import * as express from 'express';
let app:any = express();
app.get('/sample/user/:uname/password/:upwd',(req:any, res:any) => {
    if (req.params.uname === 'anup' && req.params.upwd === 'mohan') {
        res.status(200).json({login: 'success'});
    } else {
        res.status(400).json({login: 'fail'});
    }
});

app.listen(8080, () => {
    console.log('server started successfully');
}); */
//http://localhost:8080/sample?uname=anupm&upwd=sinha123
//http://localhost:8080/login?uname=admin&upwd=admin
//req.query.uname
//req.query.upwd
var express = require("express");
var app = express();
app.get('/login/', function (req, res) {
    if (req.query.uname === 'admin' && req.query.upwd === 'admin') {
        res.status(200).json({ 'login': 'success' });
    }
    else {
        res.status(401).json({ 'login': 'fail' });
    }
});
app.listen(8080, function () {
    console.log('server started!');
});
