var express = require('express');
var router = express.Router();
var quizController = require('../controllers/quiz_controller');
var sessionController = require('../controllers/session_controller');
var userController = require('../controllers/user_controller');
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

// ------------------------------ USER ROUTES -------------------------------
router.get('/user', userController.index);
router.get('/user/new', userController.new);
router.post('/user/new', userController.create);
router.get('/user/show', sessionController.loginRequired, userController.show);
router.get('/user/show/:userId', sessionController.loginRequired, userController.perfil);

// ------------------------------ TEST ROUTES -------------------------------
router.get('/test', testController.home);

module.exports = router;
