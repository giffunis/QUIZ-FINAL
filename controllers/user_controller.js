var models = require('../models/models.js');

exports.load = function(req, res, next, userId){
  models.User.find({
    where: { id: Number(userId)}
  }).then(
    function(user){
      if (user) {
        req.user = user;
        next();
      }else {
        next(new Error('No existe userId = ' + userId));
      }
    }
  ).catch(function(error){next(error);});
};

exports.autenticar = function(login, password, callback){
  models.User.find({where:{username: login}}).then(function(user){
    if (user.password == password) {
      callback(null, user);
    } else {
      callback(new Error('Password erróneo'));
    }
  }).catch(function(){
    callback(new Error('El nombre de usuario no existe o está vacío'));
  });
};

exports.new = function(req,res){
  var errors = req.session.errors || {};
  req.session.errors = {};
  res.render('pages/user/new', {errors: errors});
};

exports.create = function(req, res){
  var user = models.User.build(
    {
      username: req.body.user.username,
      password: req.body.user.password,
      bestScore: 0
    });

  user.validate().then(function(err){
    if(err){
      res.render('pages/user/new', {user: user, errors: err.errors});
    }else{
      user.save().then(function(){
        res.redirect('/login');
      });
    }
  }).catch(function(error){
    next(error);
  });
};

exports.show = function(req, res, next){
  models.Quiz.findAll({where:{UserId: Number(req.session.user.id)}}).then(function(quizes){
    res.render('pages/user/show', {quizes: quizes});
  }).catch(function(error){
    next(new Error(error));
  });
};

exports.index = function(req, res){
  models.User.findAll().then(function(users){
    res.render('pages/user/index', {usuarios: users});
  });
};
