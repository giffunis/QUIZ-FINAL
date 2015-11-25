var Quiz = require('../models/quiz_model2');

var quiz = new Quiz();
var current = quiz.randomQuestion();
/* GET quizes/question page. */
exports.question = function(req,res) {
  current = quiz.randomQuestion();
  res.render('quizes/question', {pregunta: current.pregunta});
};

exports.home = function(req, res){
  //debug("en index.js: visitando '/'");
  res.render('pages/index', {title: 'Quiz'});
};

/* GET quizes/answer page. */
exports.answer = function(req, res) {
  var c = 'Incorrecto';
  if (current.respuesta(req.query.respuesta)) { c = 'Correcto'; }
  res.render('quizes/answer', {respuesta: c});
};

exports.questions = function(req, res){
  var nQ = quiz.nQuestions();
  var salida = new Array(nQ);
  for(var i = 0; i < nQ; i++){
     salida[i] = quiz.getQuestion(i);
  }
  res.render('quizes/questions', {respuesta: salida});
};

exports.choosedQuestion = function(req, res){
  try {
    current = quiz.getQuestion(req.params.id - 1);
    res.render('quizes/question', {pregunta: current.pregunta});
  }catch (e) {
    res.render('error2', {message: "No existe esa pregunta"});
  }

};
