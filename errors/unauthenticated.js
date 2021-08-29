const CustomAPIError = require('../errors/custom-error')
const {StatusCodes}= require('http-status-codes')

class UnauthenticatedError extends CustomAPIError{
    constructor(message){
        super(message)
        this.status = StatusCodes.UNAUTHORIZED
    }
}

module.exports = UnauthenticatedError