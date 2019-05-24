// user/login user/register here

const express = require('express')
const router = express.Router()

// router.get('/login',(req, res) => res.send('Login Page'))
// //seding responsed when routes are  

// router.get('/register',(req, res) => res.send('Register Page'))


router.get('/login',(req, res) => res.render('login'))
//to render login and register pages
router.get('/register',(req, res) => res.render('register'))



module.exports = router