var models = require('../models/models.js');


exports.home = function(req, res){
  res.render('pages/index', {title: 'Quiz'});
};

/* GET quizes/question page. */
exports.index = function(req,res) {
  models.Quiz.findAll().then(function(quizes){
    res.render('pages/quizes/index', {quizes: quizes});
  });
};

exports.show = function(req, res){
  models.Quiz.findById(req.params.quizId).then(function(quiz){
    res.render('pages/quizes/show', {quiz: quiz});
  });
};

/* GET quizes/answer page. */
exports.answer = function(req, res) {
  models.Quiz.findById(req.params.quizId).then(function(quiz){
    var c = 'Incorrecto';
    if(req.query.respuesta === quiz.respuesta){
      c = 'Correcto';
    }
    res.render('pages/quizes/answer', {respuesta: c});
  });
};


// exports.questions = function(req, res){
//   var nQ = quiz.nQuestions();
//   var salida = new Array(nQ);
//   for(var i = 0; i < nQ; i++){
//      salida[i] = quiz.getQuestion(i);
//   }
//   res.render('pages/quizes/questions', {respuesta: salida});
// };
//
