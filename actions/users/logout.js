var logout;

logout = function(req, res) {
  if (req.sesstion) {
    req.sesstion.current_user = nil;
  }
  return res.redirect('/');
};

module.exports = logout;
