const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    if (req.method === 'OPTIONS') {
        next();
    }
    try {
        const token = req.headers.authorization.split(' ')[1]; // [0] - Bearer-Тип токена // [1] - token
        if (!token) {
            return res.status(401).json({message: 'Auth error'});
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY);// проверка токена
        req.user = decoded;// запись пользователя в req.user
        next();
    }catch (e) {
        res.status(401).json({message: 'Auth error'});
    }
}