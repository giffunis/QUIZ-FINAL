var express = require('express');
var router = express.Router();
var quizController = require('../controllers/quiz_controller');
var sessionController = require('../controllers/session_controller');
var testController = require('../controllers/test_controller');

/* Load the autoload */
router.param('quizId', quizController.load);

/* GET home page. */
router.get('/', quizController.home);

// ------------------------------ SESSION ROUTES -------------------------------
/* GET login */
router.get('/login', sessionController.new);
/* POST login */
router.post('/login', sessionController.create);
/* DELETE login */
router.delete('/logout', sessionController.destroy);

// ------------------------------ TEST ROUTES -------------------------------
router.get('/test', sessionController.loginRequired, testController.home);
router.get('/test/:quizId(\\d+)', sessionController.loginRequired, testController.control);

module.exports = router;
