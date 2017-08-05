var express = require('express');
var request = require('supertest');
var chai = require('chai');
var reversemain = require('../reverse');

var expect = chai.expect;

describe('reversedWord', function() {
  var server;

  beforeEach(function() {
    var app = express();
    var reverse = require('../reverse');
    reverse.express({
      expressApp: app,
      router: express.Router(),
      debug: true,
      checkCert: false
    });
    server = app.listen(3000);
  });

  afterEach(function() {
    server.close();
  });

  it('responds to invalid data', function() {
    return request(server)
      .post('/reverse')
      .send({})
      .expect(200).then(function(response) {
        return expect(response.body).to.eql({
          version: '1.0',
          response: {
            directives: [],
            shouldEndSession: true,
            outputSpeech: {
              type: 'SSML',
              ssml: '<speak>Error: not a valid request</speak>'
            }
          },
          sessionAttributes: {}
        });
      });
  });

  it('responds to a launch event', function() {
    return request(server)
      .post('/reverse')
      .send({
        request: {
          type: 'LaunchRequest',
        }
      })
      .expect(200).then(function(response) {
        var ssml = response.body.response.outputSpeech.ssml;
        var reversedssml = reversemain.reverse(ssml);
        return expect(ssml).to.eql('<speak>' + reversedssml + '</speak>');
      });
  });

});
