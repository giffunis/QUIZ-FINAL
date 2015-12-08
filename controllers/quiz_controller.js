var models = require('../models/models.js');


exports.home = function(req, res){
  res.render('pages/index', {title: 'Quiz'});
};

/* GET quizes/question page. */
exports.question = function(req,res) {
  models.Quiz.findAll().success(function(quiz){
    res.render('pages/quizes/question', {pregunta: quiz[0].pregunta});
  });
};

/* GET quizes/answer page. */
exports.answer = function(req, res) {
  models.Quiz.findAll().success(function(quiz){
    var c = 'Incorrecto';
    if(req.query.respuesta === quiz[0].respuesta){
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
// exports.choosedQuestion = function(req, res){
//   try {
//     current = quiz.getQuestion(req.params.id - 1);
//     res.render('pages/quizes/question', {pregunta: current.pregunta});
//   }catch (e) {
//     res.render('pages/errors/error2', {message: "No existe esa pregunta"});
//   }
//
// };
