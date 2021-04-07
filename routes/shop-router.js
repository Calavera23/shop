"use strict";
var express = require("express");
var bodyParser = require("body-parser");
var shopRouter = express.Router();
shopRouter.use(bodyParser.json());
shopRouter.route('/')
    .all(function (req, res, next) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
    .get(function (req, res, next) {
    res.end('Will send all the shops to you!');
})
    .post(function (req, res, next) {
    res.end('From router. Will add the shop: ' + req.body.name + ' with details: ' + req.body.description);
})
    .put(function (req, res, next) {
    res.statusCode = 403;
    res.end('PUT operation not supported on /shops');
})["delete"](function (req, res, next) {
    res.end('Deleting all shops');
});
module.exports = shopRouter;
