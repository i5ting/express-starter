var LOCK_TIME, MAX_LOGIN_ATTEMPTS, SALT_WORK_FACTOR, Schema, UserSchema, bcrypt, mongoose;

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Promise = require('bluebird');

// bcrypt = require('bcrypt');

UserSchema = new Schema({
  username: {// 姓名
    type: String
  },
  password: {
    type: String,
    required: false
  },
  created_at    : {
    type: Date,
    default: Date.now()
  }
});


UserSchema.methods.is_exist = function(cb) {
  var query;
  query = {
    username: this.username,
    password: this.password
  };
  return this.model('UserModel').findOne(query, cb);
};


var UserModel = mongoose.model('UserModel', UserSchema);

Promise.promisifyAll(UserModel);
Promise.promisifyAll(UserModel.prototype);

module.exports = UserModel;
