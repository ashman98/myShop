const Router = require('express').Router
const router = new Router();
const BrandController = require('../controllers/BrandController');
const CheckRoleMiddleware = require('../middleware/CheckRoleMiddleware');

router.post('/',CheckRoleMiddleware('ADMINISTRATOR'), BrandController.create);

router.get('/', BrandController.getAll);

module.exports = router