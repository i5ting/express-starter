var a;

a = function(req, res) {
  var User, username;
  User = req.model.UserModel;
  username = req.body.username;
  return User.remove({
    username: username
  }, function(err) {
    if (err) {
      return res.status(200).json({
        data: {},
        status: {
          code: err.code,
          msg: 'remove user failed' + err.name + ' : ' + err.err
        }
      });
    } else {
      return res.status(200).json({
        data: {},
        status: {
          code: 0,
          msg: 'remove user success'
        }
      });
    }
  });
};

module.exports = a;
