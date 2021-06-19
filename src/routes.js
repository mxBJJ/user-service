const express = require('express')
const userController = require('./controller/userController')
const authController = require('./controller/authController')
const router = express.Router()

router.post('/cadastrar', userController.create)
router.post('/avaliar', userController.rating)
router.post('/login', authController.login)


module.exports = router