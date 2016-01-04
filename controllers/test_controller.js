var models = require('../models/models.js');

exports.home = function(req, res, next){
  models.Quiz.findAll({order:['id','DESC']}).then(function(quizes){
    res.render('/pages/test/home', {quizes: quizes});
  }).catch(function(error){
    next(new Error(error));
  });
};
