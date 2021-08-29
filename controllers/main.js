require('dotenv').config()
const jwt = require('jsonwebtoken')
const {CustomAPIError, BadRequestError, UnauthenticatedError} = require('../errors')

const login = async (req, res)=>{
    const {username, password} = req.body
    if (!username || !password){
        throw new BadRequestError('You need to provide username and password ! :(')
    }
    // fake id for token
    const id = Date.now()
    const token  = jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn:'30d'})
    res.status(200).json({msg:`Bonjour ${username} voici vos données secrètes`, token:token})
}
const dashboard = async (req, res)=>{
    const luckyNumber = Math.floor(Math.random()*100)  
    res.status(200).json({msg:`Salut  ${req.user.username}!`, secret:`Voici tes données apres authorisation: ${luckyNumber}`})    
}

module.exports = {login, dashboard}