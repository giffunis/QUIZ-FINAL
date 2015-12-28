var express = require('express');
var quizesRoute = express.Router();
var quizController = require('../controllers/quiz_controller');
var commentController = require('../controllers/comment_controller');

/* Load the autoload */
quizesRoute.param('quizId', quizController.load);

/* GET quizes/ */
quizesRoute.get('/',quizController.index);

/* GET quizes/:id */
quizesRoute.get('/:quizId(\\d+)', quizController.show);

/* GET quizes/answer page.*/
quizesRoute.get('/:quizId(\\d+)/answer', quizController.answer);

/* GET quizes/new page.*/
quizesRoute.get('/new', quizController.new);

/* POST quizes/create page.*/
quizesRoute.post('/create', quizController.create);

/* GET quizes/:id/edit */
quizesRoute.get('/:quizId(\\d+)/edit', quizController.edit);

/* PUT quizes/:id/ */
quizesRoute.put('/:quizId(\\d+)', quizController.update);

/* DELETE quizes/:id/ */
quizesRoute.delete('/:quizId(\\d+)', quizController.destroy);


// RUTAS DE LOS COMENTARIOS
quizesRoute.get('/quizId(\\d+)/comments/new', commentController.new);
quizesRoute.post('/quizId(\\d+)/comments', commentController.create);

module.exports = quizesRoute;
