require('dotenv').config()
const jwt = require('jsonwebtoken')
const CustomAPIError = require('../errors/custom-error')

const login = async (req, res)=>{
    const {username, password} = req.body
    if (!username || !password){
        throw new CustomAPIError('You need to provide username and password ! :(', 400)
    }
    // fake id for token
    const id = Date.now()
    const token  = jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn:'30d'})
    res.status(200).json({msg:`Bonjour ${username} voici vos données secrètes`, token:token})
}
const dashboard = async (req, res)=>{
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer ')){
        throw new CustomAPIError('No JWT given', 400)
    }
    const token = authHeader.split(' ')[1]
    console.log(token);
    const luckyNumber = Math.floor(Math.random()*100)  
    res.status(200).json({msg:`Salut mon ami !`, secret:`Voici tes données apres authorisation: ${luckyNumber}`})
}

module.exports = {login, dashboard}