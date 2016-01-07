var express = require('express');
var usersRouter = express.Router();
var sessionController = require('../controllers/session_controller');
var userController = require('../controllers/user_controller');


/* Load the autoload */
usersRouter.param('userId', userController.load);

// ------------------------------ USER ROUTES -------------------------------
usersRouter.get('/', userController.index);
usersRouter.get('/new', userController.new);
usersRouter.post('/new', userController.create);
usersRouter.get('/show', sessionController.loginRequired, userController.show);
usersRouter.get('/:userId(\\d+)/show', sessionController.loginRequired, userController.perfil);


module.exports = usersRouter;
