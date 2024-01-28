const ApiError = require('../error/ApiError');
const {User, Basket} = require('../models/models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class UserController{
    constructor() {
        this.generateJwtTokenService =require('../services/GenerateJwtTokenService');
    }

    registration = async (req, res,next) => {
        try{
            const {email, password, role} = req.body;

            if (!email || !password){
                return next(ApiError.badRequest('Некорректный email или пароль'));
            }
            const catchUser = await User.findOne({where: {email}});
            if (catchUser){
                return next(ApiError.badRequest('Пользователь с таким email уже существует'));
            }

            const hashPassword = await bcrypt.hash(password, 5);// хэширование пароля 5 раз
            const user = await User.create({email:email, password:hashPassword});
            const basket = await Basket.create({userId: user.id});
            const jwtToken = this.generateJwtTokenService.generateUserJwtToken(user.id, user.email, user.role);

            return res.json({jwtToken});
        }catch (e){
            return next(ApiError.badRequest(e.message));
        }
    };

    login = async (req, res,next) => {
        const {email, password} = req.body;
        const user = await User.findOne({where: {email}});
        if (!user){
            next(ApiError.internal('Пользователь не найден'));
        }
        let comparePassword = bcrypt.compareSync(password, user.password); // сравнение пароля
        if (!comparePassword){
            next(ApiError.internal('Указан неверный пароль'));
        }
        const  jwtToken = this.generateJwtTokenService.generateUserJwtToken(user.id, user.email, user.role);
    };

    checkAuth = async (req, res, next) => {
        const {id} = req.query;
        if (!id){
           return next(ApiError.badRequest('Не передан id'));
        }
        res.json(id);
    };
}

module.exports = new UserController();