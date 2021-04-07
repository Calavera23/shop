"use strict";
exports.__esModule = true;
var express = require("express");
var morgan = require("morgan");
var http = require("http");
var hostname = 'localhost';
var port = 3000;
var app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
var shopRouter = require("../routes/shop-router");
app.use('/shops', shopRouter);
app.get('/shops/:shopId', function (req, res, next) {
    res.end('Will send details of the shop: ' + req.params.shopId + ' to you!');
});
app.post('/shops/:shopId', function (req, res, next) {
    res.statusCode = 403;
    res.end('POST operation not supported on /shops/' + req.params.shopId);
});
app.put('/shops/:shopId', function (req, res, next) {
    res.write('Updating the shop: ' + req.params.shopId + '\n');
    res.end('Will update the shop: ' + req.body.name +
        ' with details: ' + req.body.description);
});
app["delete"]('/shops/:shopId', function (req, res, next) {
    res.end('Deleting shop: ' + req.params.shopId);
});
app.use(express.static(__dirname + '/public'));
app.use(function (req, res, next) {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});
var server = http.createServer(app);
server.listen(port, hostname, function () {
    console.log("Server running at http://" + hostname + ":" + port + "/");
});
