var models = require('../models/models.js');

// var users = { admin: {id:1, username:"admin", password:"1234"}};

exports.autenticar = function(login, password, callback){
  if (users[login]) {
    if (password == users[login].password) {
      callback(null, users[login]);
    } else {
      callback(new Error('Password erróneo'));
    }
  } else {
    callback(new Error('No existe ese usuario'));
  }
};

exports.create = function(req, res){
  var user = models.User.build(
    {
      username: req.body.user.username,
      password: req.body.user.password
    });

  user.validate().then(function(err){
    if(err){
      res.render('pages/user/new', {user: user, errors: err.errors});
    }else{
      user.save().then(function(){
        res.redirect('/login');
      });
    }
  }).catch();
};
