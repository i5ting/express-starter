var User, assert, connectionString, expect, model, models, mongoose, options, testUser;

assert = require('chai').assert;

expect = require('chai').expect;

require('chai').should();

model = require('../models');

User = model.UserModel;

require('../db')

var _oauth_user_save;

describe('UserModel', function(){
  before(function() {
    // runs before all tests in this block
    User.remove({}, function (err) {
      //throw err;
    });
  })
  after(function(){

 
  })
  beforeEach(function(){
    // runs before each test in this block
  })
  afterEach(function(){
    // runs after each test in this block
  })

  describe('#save()', function() {
    it('should return sang_test2 when user save oauth user', function(done) {

      var _user = new User({
        username:'sang大叔',
        password:'ewrewrwer'
      }); 
      
      return _user.saveAsync().then(function(users) {
        var user = users[0]
        console.log(user)
        assert.equal(user.username, 'sang大叔');
        return done();
      }).catch(function(err){
         
          console.log(err);
          
          throw err;
          
          done(err);

      });
      
    });
  });

 });
