var models = require('../models/models.js');

exports.load = function(req, res, next, quizId){
  models.Quiz.find({
    where: { id: Number(quizId)},
    include: [{ model: models.Comment}]
  }).then(
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
exports.index = function(req,res,next) {
  models.Quiz.findAll().then(function(quizes){
    res.render('pages/quizes/index', {quizes: quizes});
  }).catch(function(error){
    next(new Error(error));
  });
};

exports.show = function(req, res){
  models.User.find({where:{id: req.quiz.UserId}}).then(function(usuario){
    res.render('pages/quizes/show', {quiz: req.quiz, usuario: usuario.username, errors: []});
  });
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
  var quiz = models.Quiz.build({pregunta: "", respuesta: "", UserId: ""});
  res.render('pages/quizes/new', {quiz: quiz, errors:[]});
};

/* POST quizes/create page.*/
exports.create = function(req, res) {
  var quiz = models.Quiz.build(req.body.quiz);

  quiz.validate().then(function(err){
    if(err){
      res.render('pages/quizes/new', {quiz: quiz, errors: err.errors});
    }else {
      quiz.save({fields: ["pregunta", "respuesta", "UserId", "tipo"]}).then(function(){
        res.redirect('/quizes');
      });
    }
  });
};

/* GET quizes/:id/edit */
exports.edit = function(req,res){
  var quiz = req.quiz; //autoload
  res.render('pages/quizes/edit', {quiz: quiz, errors: []});
};

/* PUT quizes/:id/ */
exports.update = function(req,res){
  req.quiz.pregunta = req.body.quiz.pregunta;
  req.quiz.respuesta = req.body.quiz.respuesta;
  req.quiz.tipo = req.body.quiz.tipo;

  req.quiz.validate().then(function(err){
      if(err){
        res.render('pages/quizes/edit',{quiz: req.quiz, errors: err.errors});
      }else{
        req.quiz.save({fields:["pregunta","respuesta","tipo"]}).then(function(){
          res.redirect('/quizes');
        });
      }
  });
};

/* DELETE quizes/:id/ */
exports.destroy = function(req,res){
  req.quiz.destroy().then(function(){
    res.redirect('/quizes');
  }).catch(function(error){
    next(error);
  });
};
