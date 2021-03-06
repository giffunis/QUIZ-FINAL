var express = require('express');
var router = express.Router();
var quizController = require('../controllers/quiz_controller');
var sessionController = require('../controllers/session_controller');

/* GET home page. */
router.get('/', quizController.home);

// ------------------------------ SESSION ROUTES -------------------------------
/* GET login */
router.get('/login', sessionController.new);
/* POST login */
router.post('/login', sessionController.create);
/* DELETE login */
router.delete('/logout', sessionController.destroy);

module.exports = router;
