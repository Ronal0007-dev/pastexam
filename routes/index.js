const express = require('express');
const bodyParser = require('body-parser');
const app = express.Router();

//parse application/json
app.use(bodyParser.json());
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


/* GET home page. */
app.get('/', function(req, res, next) {
  res.render('index', { title: 'HOME | PAST' });
});

app.get('/login', function(req, res, next) {
  res.render('login', { title: 'LOGIN | PAST' });
});

module.exports = app;
