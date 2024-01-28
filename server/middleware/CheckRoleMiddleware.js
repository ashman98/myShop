const jwt = require('jsonwebtoken');

module.exports = (role) => {
    return (req, res, next) => {
        if (req.method === 'OPTIONS') {
            next();
        }
        try {
            const token = req.headers.authorization.split(' ')[1]; // [0] - Bearer-Тип токена // [1] - token
            if (!token) {
                return res.status(401).json({message: 'Auth error'});// если нет токена
            }
            const decoded = jwt.verify(token, process.env.SECRET_KEY);// проверка токена
            if (decoded.role !== role) { // проверка роли
                return res.status(403).json({message: 'Нет доступа'});
            }
            req.user = decoded;
            next();
        }catch (e) {
            res.status(401).json({message: 'Auth error'});
        }
    }
}