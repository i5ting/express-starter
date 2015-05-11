var check_session_is_expired;
var config = require('config');
var is_debug  = config.get('is_debug');


check_session_is_expired = function(req, res, next) {
  if (req.session.current_user) {

    var user                = req.session.current_user;
    return next();
  } else {
      var url = '/';
      return res.redirect(url);
  }
};

module.exports = check_session_is_expired;
