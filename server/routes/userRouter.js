const Router = require('express').Router
const router = new Router();
const UserController = require('../controllers/UserController');
const AuthMiddleware = require('../middleware/AuthMiddleware');

router.post('/registration', UserController.registration);

router.post('/login', UserController.login);

router.get('/auth',AuthMiddleware, UserController.checkAuth);

module.exports = router