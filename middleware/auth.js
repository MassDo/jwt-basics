require('dotenv').config()
const jwt = require('jsonwebtoken')
const {UnauthenticatedError, BadRequestError} = require('../errors')


const authentificationMiddleware = async (req, res, next) =>{
    const authHeader = req.headers.authorization
    
    if (!authHeader || ! authHeader.startsWith('Bearer ')){
        throw new UnauthenticatedError('No JWT given')
    }
    const token = authHeader.split(' ')[1]
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
        next()
    } catch (error) {
        throw new BadRequestError(`Pas autorisé pour cette route !`)
    }
}

module.exports = authentificationMiddleware