const Router = require('express').Router
const router = new Router();
const TypeController = require('../controllers/TypeController');
const CheckRoleMiddleware = require('../middleware/CheckRoleMiddleware');

router.post('/',CheckRoleMiddleware('ADMINISTRATOR'), TypeController.create);

router.get('/', TypeController.getAll);

module.exports = router