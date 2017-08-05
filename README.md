# alexa-backwardsword
Alexa Skill to say intended word backwards.

### Simple Alexa Skill.  Learning for fun.

### Use reverse.py 
Setup Alexa skill and test on developer.amazon.com using AWS Lambda function
Best results follow: https://developer.amazon.com/alexa-skills-kit/alexa-skill-quick-start-tutorial

### TODO: get node.js version coded/working

### Open Alexa Skill
    Alexa open backwards word

### Welcome Phrase
    "Welcome to the Alexa Skill Backwards word."
    "Please tell me a word and I will say it backwards."

### Utterance
    {Word}

    Setup Utterance in Testing on developer.amazon.com Alexa skill Testing
    SayThisWordBackwardsIntent {Word}

### Response Speech
    "Your word backwards is " + reversed_word + \
    ". Thank you."

### JSON Request example
```json
 {
   "session": {
     "sessionId": "SessionId.***",
     "application": {
       "applicationId": "amzn1.ask.skill.777"
     },
     "attributes": {},
     "user": {
       "userId": "amzn1.ask.account.****"
     },
     "new": false
   },
   "request": {
     "type": "IntentRequest",
     "requestId": "EdwRequestId.807fedad-c906",
     "locale": "en-US",
     "timestamp": "2017-08-05T03:48:57Z",
     "intent": {
       "name": "SayThisWordBackwardsIntent",
       "slots": {
         "Word": {
           "name": "Word",
           "value": "pizza"
         }
       }
     }
   },
   "version": "1.0"
 }
```
 ### JSON Response Example
```json
 {
  "version": "1.0",
  "response": {
    "outputSpeech": {
      "type": "PlainText",
      "text": "Your word backwards is azzip. Thank you."
    },
    "card": {
      "content": "SessionSpeechlet - Your word backwards is azzip. Thank you.",
      "title": "SessionSpeechlet - SayThisWordBackwardsIntent",
      "type": "Simple"
    },
    "reprompt": {
      "outputSpeech": {
        "type": "PlainText",
        "text": null
      }
    },
    "speechletResponse": {
      "outputSpeech": {
        "id": null,
        "text": "Your word backwards is azzip. Thank you."
      },
      "card": {
        "title": "SessionSpeechlet - SayThisWordBackwardsIntent",
        "content": "SessionSpeechlet - Your word backwards is azzip. Thank you."
      },
      "directives": null,
      "reprompt": {
        "outputSpeech": {
          "id": null,
          "text": null
        }
      },
      "shouldEndSession": true
    }
  },
  "sessionAttributes": {}
}
```
