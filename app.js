const middleware = require('./src/middleware/middleware');
const express = require('express');
const cors = require( `cors` );
require('dotenv').config();
const app = express();

const routes = require('./src/routes');

app.disable('x-powered-by');
app.use(express.json({'limit':'10mb'}));
app.use(express.urlencoded({ extended: true }));

app.all('*', function(_, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', '*');
	res.header('Access-Control-Allow-Credentials', true);
	res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
	next();
}, middleware.getRequest);

app.use( cors() );
app.use('/api', routes);

module.exports = app;