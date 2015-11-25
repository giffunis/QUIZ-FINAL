var Quiz = require('../models/quiz_model2');

var quiz = new Quiz();
var current = quiz.randomQuestion();
/* GET quizes/question page. */
exports.question = function(req,res) {
  current = quiz.randomQuestion();
  res.render('pages/quizes/question', {pregunta: current.pregunta});
};

exports.home = function(req, res){
  res.render('pages/index', {title: 'Quiz'});
};

/* GET quizes/answer page. */
exports.answer = function(req, res) {
  var c = 'Incorrecto';
  if (current.respuesta(req.query.respuesta)) { c = 'Correcto'; }
  res.render('pages/quizes/answer', {respuesta: c});
};

exports.questions = function(req, res){
  var nQ = quiz.nQuestions();
  var salida = new Array(nQ);
  for(var i = 0; i < nQ; i++){
     salida[i] = quiz.getQuestion(i);
  }
  res.render('pages/quizes/questions', {respuesta: salida});
};

exports.choosedQuestion = function(req, res){
  try {
    current = quiz.getQuestion(req.params.id - 1);
    res.render('pages/quizes/question', {pregunta: current.pregunta});
  }catch (e) {
    res.render('pages/errors/error2', {message: "No existe esa pregunta"});
  }

};
