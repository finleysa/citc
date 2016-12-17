const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

var app = express()

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


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send(err.message);
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render(err.message);
});

app.set('port', (process.env.PORT || 8080))

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});

// module.exports = app;
