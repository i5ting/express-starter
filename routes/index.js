var express = require('express');
var router = express.Router();
var check_session = require('../middleware/check_session_is_expired');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { 
    title: '主页'
  });
});


router.get('/home', check_session, function(req, res) {
  res.render('home', { 
      title: '用户主页',
      user : req.session.current_user
  });
});



router.get('/register', function(req, res) {
  res.render('user/register', { title: 'webot register' });
});

router.get('/login', function(req, res) {
  res.render('user/login', { title: 'webot login' });
});

router.get('/logout', function(req, res) {
  res.render('user/logout', { title: 'webot logout' });
});


module.exports = router;
