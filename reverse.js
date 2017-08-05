var alexa = require('alexa-app');

var app = new alexa.app('reverse');


function reverse(vWord) {
  var s = [];
  for (var i = 0, len = word.length; i <= len; i++) {
       s.push(word.charAt(len - i));
    }

  return s.join('');
}

app.launch(function(req, res) {
  res.say('Say any word and I will say it in reverse.');
});

app.intent('RepeatIntent', {
    'slots': {
      'VALUE': 'AMAZON.NUMBER'
    },
    'utterances': [
      'repeat {-|VALUE}'
    ]
  },
  function(req, res) {
    var word = req.slot('VALUE');

    var reversedWord = reverse(word);

    res.say(`Reversed ${reversedWord}.`);

  }
);

module.exports = app;
