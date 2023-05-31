require('./database/mongodb');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var subRouter = require('./routes/subRouter');

var app = express();
app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/assinantes/', subRouter);



//No final do index.js, ativar o servidor
const PORT = 3000
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})

module.exports = app;