class GenerateJwtTokenService {

    constructor() {
        this.jwt = require('jsonwebtoken');
    }
    generateUserJwtToken(id, email, role = '') {
        const userJwtToken = this.jwt.sign(
            {id, email, role}, // данные
            process.env.SECRET_KEY_TOKEN,// приватный ключ
            {expiresIn: '24h'} // токен действительен 24 часа
        )

        return userJwtToken;
    }
}

module.exports = new GenerateJwtTokenService();