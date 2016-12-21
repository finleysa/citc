const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const helmet = require('helmet')
const winston = require('winston');

var app = express()

app.use(helmet());
app.use(helmet.hidePoweredBy({ setTo: 'PHP 4.2.0' }))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/', express.static(path.join(__dirname, '../dist')));
app.use('/node_modules', express.static(path.join(__dirname, '../node_modules')));
app.post('/contact/email', function(req, res) {
  console.log(req.body);
});
app.get('*', function(req, res) {
  res.status(200).sendFile(path.join(__dirname, '../dist/index.html'));
})

if (app.get('env') === 'production') {
  console.log("Running server in production mode");
}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  logger.error("Route not Found")
  err.status = 404;
  next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    logger.error(err.message);
    res.status(err.status || 500);
    res.send(err.message);
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  logger.error(err.message);
  res.status(err.status || 500);
  res.render(err.message);
});

app.set('port', (process.env.PORT || 8080))

app.listen(app.get('port'), function() {
  console.log("Listening on localhost:" + app.get('port'))
});


// module.exports = app;
