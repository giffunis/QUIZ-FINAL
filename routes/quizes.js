var express = require('express');
var quizesRoute = express.Router();
var quizController = require('../controllers/quiz_controller');

/* Load the autoload */
quizesRoute.param('quizId', quizController.load);

/* GET quizes/ */
quizesRoute.get('/',quizController.index);

/* GET quizes/:id */
quizesRoute.get('/:quizId(\\d+)', quizController.show);

/* GET quizes/answer page.*/
quizesRoute.get('/:quizId(\\d+)/answer', quizController.answer);

module.exports = quizesRoute;
