var models = require('../models/models.js');

exports.new = function(req, res){
  res.render('pages/comments/new', {quizid: req.params.quizId, errors:[]});
};
