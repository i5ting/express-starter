var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session      = require('express-session')
var bodyParser = require('body-parser')

require('./db')

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// for raw data
app.use(function(req, res, next){
  if (req.is('text/*')) {
    req.text = '';
    req.setEncoding('utf8');
    req.on('data', function(chunk){ req.text += chunk });
    req.on('end', next);
  } else {
    next();
  }
});

app.use(multer({ 
	dest: './uploads/',
  rename: function (fieldname, filename) {
    return filename.replace(/\W+/g, '-').toLowerCase() + Date.now()
  }
}))

app.use(function(req, res, next) {
  req.server_path = path.join(__dirname, 'public');
  return next();
});

app.use(function(req, res, next) {
  req.model = require('./models');
  return next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 如果需要 session 支持，sessionStore 必须放在 watch 之后
// app.use(express.cookieParser());
// 为了使用 waitRule 功能，需要增加 session 支持
// app.use(session({
//   secret: 'abced111',
//   store: new session.MemoryStore()
// }));
var store = new session.MemoryStore();
var half_hour = 3600000 / 2;

app.use(session({
  store: store,
  secret: 'gupjia.ng@me',
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false,
    maxAge: half_hour
  }
}));


app.use('/', routes);
app.use('/user', users);

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
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


var debug = require('debug')('xbm-paiban');
// var app = require('../app');

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
});


module.exports = app;
