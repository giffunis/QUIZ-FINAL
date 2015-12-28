var express = require('express');
var debug = require('debug')('quiz:server');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var session = require('express-session');
var routes = require('./routes/index');
var quizesRoute = require('./routes/quizes.js');

var expressLayouts = require('express-ejs-layouts');
var app = express();

app.set('layout', 'layout'); // defaults to 'layout'

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'images/favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser('Quiz STW 2015'));
app.use(session());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

// Helpers dinamic
app.use(function(req,res,next){
  if(!req.path.match(/\/login|\/logout/)){
    req.session.redir = req.path;
  }
  // para hacer visible a las listas la variable req.session
  res.locals.session = req.session;
  next();
});

// Routes
app.use('/', routes);
app.use('/quizes',quizesRoute);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('pages/errors/error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('pages/errors/error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
