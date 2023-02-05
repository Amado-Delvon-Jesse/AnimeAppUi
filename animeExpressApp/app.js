var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

const {XRapidAPIHost, XRapidAPIKey} = require('./keys')

const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://anime-db.p.rapidapi.com/anime',
  params: {page: '1', size: '10000', sortBy: 'ranking', sortOrder: 'asc'},
  headers: {
    'X-RapidAPI-Key': XRapidAPIKey,
    'X-RapidAPI-Host': XRapidAPIHost
  }
};

// file system module to perform file operations
const fs = require('fs');
const e = require('express');

axios.request(options).then(function (response) {
  console.log(response.data);
  
  // json data
  let jsonData = response.data;

  // Don't need to parse the data because it is already a javascript Object. 
  // will cause an Uncaught SyntaxError otherwise.

  // // parse json
  // let jsonObj = JSON.parse(jsonData);
  // console.log(jsonObj);

  // stringify json object
  let jsonContent = JSON.stringify(jsonData);
  console.log(jsonContent);

  fs.writeFileSync("AnimeDB_Data.json", jsonContent, 'utf-8', function(err){
    if(err) {
      console.log("An error has occured while writing JSON Object to file.");
      return console.log(err);
    }
  })

}).catch(function (error) {
  console.error(error);
});

module.exports = app;
