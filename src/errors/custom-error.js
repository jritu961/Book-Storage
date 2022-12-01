//wrong api call without this error ser will crash
class CustomAPIError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

//constructor which create error
const createHttpError = (msg, statusCode) => {
    return new CustomAPIError(msg, statusCode);
};

module.exports = { createHttpError, CustomAPIError };