// user/login user/register here

const express = require('express')
const router = express.Router()

router.get('/login',(req, res) => res.send('Login Page'))
//seding responsed when routes are 

router.get('/register',(req, res) => res.send('Register Page'))


module.exports = router