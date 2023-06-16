"use strict";
// create the sub module
exports.__esModule = true;
var express = require("express");
var transactions = express.Router();
transactions.get('/', function (req, res) {
    res.status(200).json({ 'message': 'transaction soon ..... !' });
});
transactions.get('/pierre', function (req, res) {
    res.status(200).json({ 'message': 'welcome to pierre for node js!' });
});
exports["default"] = transactions;
