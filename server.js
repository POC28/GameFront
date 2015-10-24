var express = require('express');
var app = express();

var port = 3000;

app.use(express.static(__dirname + '/www'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

var server = app.listen(port, function () {
  console.log("Server listening on port " + port);
});
