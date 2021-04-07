import * as express from 'express';
import * as bodyParser from 'body-parser';

const shopRouter = express.Router();

shopRouter.use(bodyParser.json());

shopRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the shops to you!');
})
.post((req, res, next) => {
    res.end('From router. Will add the shop: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /shops');
})
.delete((req, res, next) => {
    res.end('Deleting all shops');
});
export = shopRouter; 
