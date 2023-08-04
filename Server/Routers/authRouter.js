const express = require('express')
const router = express.Router()
const {Login, Register } = require('../Controllers/authController')

router.post('/register', Register)
router.post('/login', Login)

module.exports = router;