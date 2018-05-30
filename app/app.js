var express = require('express');
var app = express();
var router = express.Router();

app.use(express.static('app'));

app.get('/', function(req, res) {
  res.render('index.jade');
//  res.sendfile('app/index.html')
});

app.get('/somepage', function(req, res) {
  //res.render('another.jade');
 res.sendfile('app/another.html')
});

app.listen(5000);
