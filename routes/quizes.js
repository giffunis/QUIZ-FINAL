var express = require('express');
var quizesRoute = express.Router();

var quizController = require('../controllers/quiz_controller');

/* GET quizes/ */
quizesRoute.get('/',quizController.index);

/* GET quizes/:id */
quizesRoute.get('/:id', quizController.show);

/* GET quizes/answer page.*/
quizesRoute.get('/answer', quizController.answer);

// /* GET quizes/questions page.*/
// quizesRoute.get('/questions', quizController.questions);
//
// /* GET quizes/questions/:id */
// quizesRoute.get('/questions/:id', quizController.choosedQuestion);

module.exports = quizesRoute;
