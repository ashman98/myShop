const {Type} = require('../models/models');
const ApiError = require('../error/ApiError');
const CheckRoleMiddleware = require('../middleware/CheckRoleMiddleware');


class TypeController{
    create = async (req, res) => {
        const {name} = req.body;
        const type = await Type.create({name});
        return res.json(type);
    };

    getAll = async (req, res) => {
    const types = await Type.findAll();
    return res.json(types);
    };
}

module.exports = new TypeController();