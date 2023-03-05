'use strict'

const { Router } = require('@routejs/router');
const http = require('http');

const app = new Router();

app.get('/', (req, res) => {
  res.setHeader('content-type', 'application/json; charset=utf-8');
  res.end(JSON.stringify({ hello: 'world' }));
})

http.createServer(app.handler()).listen(3000);
