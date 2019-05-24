const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')
// create a config folder and store connection string in keys.js


const app = express()

//DB config
const db = require('./config/keys').MongoURI

//connect to mongodb
mongoose.connect(db,{useNewUrlParser: true})
.then(() => console.log('MongoDB connected....'))
.catch(err => console.error(err));

//EJS
app.use(expressLayouts)
app.set('view engine','ejs')
//positioning is important otherwise fail to work

//Routes below
app.use('/',require('./routes/index'))
app.use('/users',require('./routes/users'))





const PORT = process.env.PORT || 5000 
// process.env.PORT incase we doploy or use 5000 on our localhost

app.listen(PORT, console.log(`Server started on port ${PORT}`))
// `` for writing templare string with variable

