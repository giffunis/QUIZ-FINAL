var express = require('express');
var testsRouter = express.Router();
var quizController = require('../controllers/quiz_controller');
var sessionController = require('../controllers/session_controller');
var testController = require('../controllers/test_controller');

/* Load the autoload */
testsRouter.param('quizId', quizController.load);

// ------------------------------ TEST ROUTES -------------------------------
testsRouter.get('/', sessionController.loginRequired, testController.home);
testsRouter.get('/:quizId(\\d+)', sessionController.loginRequired, testController.control);

module.exports = testsRouter;
