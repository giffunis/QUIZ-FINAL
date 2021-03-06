var models = require('../models/models.js');

exports.home = function(req, res, next){
  models.Quiz.findAll().then(function(quizes){
    req.session.user.score = 0;
    req.session.user.contPreg = 0;
    res.render('pages/test/index', {quizes: quizes, idQ: 0});
  }).catch(function(error){
    next(new Error(error));
  });
};

exports.control = function(req, res){
  if(req.query.respuesta === req.quiz.respuesta){
    req.session.user.score = req.session.user.score + 10;
  }
  models.Quiz.findAll().then(function(quizes){
    if(req.session.user.contPreg < quizes.length - 1){
      req.session.user.contPreg = req.session.user.contPreg + 1;
      res.render('pages/test/index', {quizes: quizes, idQ: req.session.user.contPreg});
    } else {
      if(req.session.user.score > req.session.user.bestScore){
        req.session.user.bestScore = req.session.user.score;
        models.User.find({where:{username: req.session.user.username}}).then(function(user){
          user.bestScore = req.session.user.bestScore;
          user.save();
        }).catch(function(error){
          next(new Error(error));
        });
      }
      res.render('pages/test/resultado', {resultado: req.session.user.score});
    }
  }).catch(function(error){
    next(new Error(error));
  });
};
