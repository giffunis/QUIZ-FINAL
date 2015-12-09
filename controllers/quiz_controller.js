var models = require('../models/models.js');

exports.load = function(req, res, next, quizId){
  models.Quiz.findById(quizId).then(
    function(quiz){
      if (quiz) {
        req.quiz = quiz;
        next();
      }else {
        next(new Error('No existe quizId = ' + quizId));
      }
    }
  ).catch(function(error){next(error);});
};

exports.home = function(req, res){
  res.render('pages/index', {title: 'Quiz'});
};

/* GET quizes/question page. */
exports.index = function(req,res) {
  models.Quiz.findAll().then(function(quizes){
    res.render('pages/quizes/index', {quizes: quizes});
  }).catch(function(error){next(error);});
};

exports.show = function(req, res){
  res.render('pages/quizes/show', {quiz: req.quiz, errors: []});
};

/* GET quizes/answer page. */
exports.answer = function(req, res) {
  var c = 'Incorrecto';
  if(req.query.respuesta === req.quiz.respuesta){
    c = 'Correcto';
  }
  res.render('pages/quizes/answer', {quiz: req.quiz, respuesta: c, errors: []});
};

/* GET quizes/new page.*/
exports.new = function(req, res) {
  var quiz = models.Quiz.build({pregunta: "", respuesta: ""});
  res.render('pages/quizes/new', {quiz: quiz, errors:[]});
};

/* POST quizes/create page.*/
exports.create = function(req, res) {
  var quiz = models.Quiz.build(req.body.quiz);
  quiz.validate().then(function(err){
    if(err){
      res.render('quizes/new', {quiz: quiz, errors: err.errors});
    }else {
      quiz.save({fields: ["pregunta", "respuesta"]}).then(function(){
        res.redirect('/quizes');
      });
    }
  });
};
