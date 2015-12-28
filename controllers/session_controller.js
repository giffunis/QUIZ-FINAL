// var models = require('../models/models.js');

exports.new = function(req, res){
  var errors = req.session.errors || {};
  req.session.errors = {};
  res.render('pages/login', {errors: errors});
};
