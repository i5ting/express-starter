var login;

login = function(req, res) {
  var User, password, user, username;
  User = req.model.UserModel;
  username = req.body.username;
  password = req.body.password;
  user = new User({
    username: username,
    password: password
  });
  return user.is_exist(function(err, sur) {
    var half_hour;
    if (err) {
      console.error(err);
      req.session.current_user = void 0;
      return res.status(200).json({
        data: {},
        status: {
          code: err.code,
          msg: err.name + ' : ' + err.err
        }
      });
    } else {
      req.session.current_user = sur;
      half_hour = 3600000 / 2;
      req.session.cookie.expires = new Date(Date.now() + half_hour);
      req.session.cookie.maxAge = half_hour;
      console.dir(req.session.current_user);
      return res.redirect('/home');
    }
  });
};

module.exports = login;
