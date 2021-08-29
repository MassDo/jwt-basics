const express = require('express')
const router = express.Router()
// controllers
const {login, dashboard} = require('../controllers/main')

const authMiddleware = require('../middleware/auth')

// extends (/api/v1) route
router.route('/dashboard').get(authMiddleware, dashboard)
router.route('/login').post(login)

module.exports = router