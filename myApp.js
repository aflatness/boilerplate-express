
var express = require('express');
var app = express();

console.log('Hello world');

app.get('/', function (req, res) {
  res.sendfile(/views/index.html);
});



































 module.exports = app;
