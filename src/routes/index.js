const express = require('express');

const routes = express.Router();

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

module.exports = routes;
