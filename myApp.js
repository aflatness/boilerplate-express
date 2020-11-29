
var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

app.use(function (req, res, next) {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});


app.get('/', function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.use(express.static(__dirname + /public));

app.get('/json', (req, res) => {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    res.json({"message": "HELLO JSON"});
  }
  else {
    res.json({"message": "Hello json"});
  }
});

process.env.MESSAGE_STYLE=uppercase;

app.get('/now', function (req, res, next) {
  req.time = new Date().toString();
  next();
}, function (req, res) {
  res.json({
    time: req.time;
  });
})

app.get('/:word/echo', function (req. res) {
  var word = req.params.word;
  res.json({

  })
})

app.get('/name', function (req, res) {
  res.json({
    name: `${req.query.first} ${req.query.last}`
  })
})

app.post('/name', function (req, res) {
  res.json({
    name: `${req.body.first} ${req.body.last}`})
})

























 module.exports = app;
