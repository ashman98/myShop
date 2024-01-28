class ApiError extends Error {
    constructor(status, message) {
        super();
        this.status = status;
        this.message = message;
    }

    static badRequest(message) {
        return new ApiError(400, message);
    }

    static internal(message) {
        return new ApiError(500, message);
    }

    static forbidden(message) {
        return new ApiError(403, message);
    }

    static notFound(message) {
        return new ApiError(404, message);
    }

    static unauthorized(message) {
        return new ApiError(401, message);
    }

    static conflict(message) {
        return new ApiError(409, message);
    }

    static unprocessableEntity(message) {
        return new ApiError(422, message);
    }

    static notImplemented(message) {
        return new ApiError(501, message);
    }

    static badGateway(message) {
        return new ApiError(502, message);
    }

    static serviceUnavailable(message) {
        return new ApiError(503, message);
    }

    static gatewayTimeout(message) {
        return new ApiError(504, message);
    }

    static notAcceptable(message) {
        return new ApiError(406, message);
    }

    static preconditionFailed(message) {
        return new ApiError(412, message);
    }

    static tooManyRequests(message) {
        return new ApiError(429, message);
    }
}

module.exports = ApiError;