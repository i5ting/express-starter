var create;

create = function(req, res) {
  var User = req.model.UserModel;
  
  // var username = req.body.username;
  // var password = req.body.password;
  //
  // var user = new User({
  //   username: username,
  //   password: password
  // });
  //
  //
  // console.log('-----222-----' + user)
  var _user = new User({
    username:'sang大叔',
    password:'ewrewrwer'
  }); 
  _user.save(function(err, user) {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log(user);    }
  });
  
  
  
};

module.exports = create;
