require('mocha');
const should = require('chai').should();

const RoboKitty = require('../');

describe('Robokitty', function(){
  describe('#makeCronString', function(){
    it('should create a string that defines hourly increments', function(){
      RoboKitty.makeCronString.should.exist;
      RoboKitty.makeCronString(8).should.equal('-0 0 0,8,16 * * *');
    })
  })
});
