require('dotenv').config()
const jwt = require('jsonwebtoken')
const CustomAPIError = require('../errors/custom-error')


const authentificationMiddleware = async (req, res, next) =>{
    const authHeader = req.headers.authorization
    
    if (!authHeader || ! authHeader.startsWith('Bearer ')){
        throw new CustomAPIError('No JWT given', 400)
    }
    const token = authHeader.split(' ')[1]
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        console.log(res.user)
        req.user = decoded
        next()
    } catch (error) {
        throw new CustomAPIError(`Pas autorisé pour cette route ! voici l erreur:${error} `,401)
    }
}

module.exports = authentificationMiddleware