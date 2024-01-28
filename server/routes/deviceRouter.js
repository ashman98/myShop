const Router = require('express').Router
const router = new Router();
const DeviceController = require('../controllers/DeviceController');
const CheckRoleMiddleware = require('../middleware/CheckRoleMiddleware');


router.post('/',CheckRoleMiddleware('ADMINISTRATOR'), DeviceController.create);

router.get('/', DeviceController.getAll);

router.get('/:id', DeviceController.getOne);

module.exports = router