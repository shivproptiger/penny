const express = require('express');

const routes = express.Router();

const test = require('src/routes/controllers/test');
// Ping route
routes.get('/ping', (req, res) => {
  res.json({
    statusCode: '2XX',
    version: 'A',
    data: 'pong',
  });
});

routes.get('/healthcheck', (req, res) => {
  res.json({
    statusCode: '2XX',
    version: 'A',
    data: [],
  });
});

routes.get('/test', test);

module.exports = routes;
