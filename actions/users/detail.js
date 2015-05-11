var detail = function(req, res) {
  var User = req.model.UserModel;
  
  var user_id = req.params.user_id;

  return User.findByIdAsync(user_id).then(function(user){
    if(user.is_valid == true){
      res.redirect('/mobile')
    }else{
      res.render('mobile/user/update_necessary', { title: '完善用户必填信息',user: user });
    }
    
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
  }).catch(function(err){
    
  });
};

module.exports = detail;
