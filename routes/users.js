var express, router, user_actions;

express = require('express');

router = express.Router();

user_actions = require('../actions/users/index');

router.get('/', function(req, res) {
  return res.send('respond with a resource');
});

router.post('/login', user_actions.login);
router.post('/login.json', user_actions.loginjson);



router.get('/logout', user_actions.logout);

router.post('/register', function(req, res){
  var User = require('../models').UserModel;
  
  var username = req.body.username;
  var password = req.body.password;

  var _user = new User({
    username: username,
    password: password
  });

  return _user.saveAsync().then(function(users) {
    var user = users[0]
    console.log(user)
    // res.status(200).json({
 //      data:user,
 //      status:{
 //        code:0,
 //        msg:'success'
 //      }
 //    })
     res.redirect('/login')
  }).catch(function(err){
    res.status(200).json({
      data:{},
      status:{
        code:1,
        msg: err
      }
    })
  }); 
});

router.get('/login', function(req, res) {
  return res.redirect('../login');
});

router.get('/register', function(req, res) {
  return res.redirect('../register');
});

// 用户详情
router.get('/:user_id', user_actions.detail);
 


module.exports = router;
