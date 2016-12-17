var api_key = 'key-8n40530b0oh532nijdwuhvdubcdx6252';
var domain = 'sandbox45740.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

var data = {
  from: 'barrackobama@citc.ae',
  to: 'steve.a.finley@gmail.com',
  subject: 'Hello',
  text: 'Testing some Mailgun awesomness!'
};

mailgun.messages().send(data, function (error, body) {
  console.log(body);
});
