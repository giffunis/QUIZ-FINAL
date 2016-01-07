var models = require('../models/models.js');

exports.home = function(req, res, next){
  models.Quiz.findAll({order:'`id` DESC'}).then(function(quizes){
    req.cookies.test = {idQ: 0, nQ: quizes.length, nA: 0, nF: 0};
    res.render('pages/test/index', {quizes: quizes, test: req.cookies.test});
  }).catch(function(error){
    next(new Error(error));
  });
};
