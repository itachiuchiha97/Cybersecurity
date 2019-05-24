// homepage etc

const express = require('express')
const router = express.Router()

// router.get('/',(req, res) => res.send('Welcome'))
//seding responsed when routes are requested

router.get('/',(req, res) => res.render('welcome'))
//view that we wanna render

module.exports = router