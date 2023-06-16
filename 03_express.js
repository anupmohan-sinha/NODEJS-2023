"use strict";
//import express module
exports.__esModule = true;
var express = require("express");
var app = express();
//app object used to develop the rest services
//eg. GET, POST, PUT, DELETE, OPTIONS, TRACE ,...
app.get('/anupm', function (req, res) {
    res.status(200).json({ 'message': 'Welcome to TypeScript with nodejs' });
});
app.listen(8080, function () {
    console.log('server started successfully!');
});
