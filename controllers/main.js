const CustomAPIError = require('../errors/custom-error')

const login = async (req, res)=>{
    const {username, password} = req.body
    if (!username || !password){
        throw new CustomAPIError('You need to provide username and password ! :(', 400)
    }
    res.send('Fake Login/Register/Signup Route')
}
const dashboard = async (req, res)=>{
    const luckyNumber = Math.floor(Math.random()*100)  
    res.status(200).json({msg:`Salut mon ami !`, secret:`Voici tes données apres authorisation: ${luckyNumber}`})
}

module.exports = {login, dashboard}