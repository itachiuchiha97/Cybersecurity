const express = require('express')

const app = express()

//Routes below
app.use('/',require('./routes/index'))
app.use('/users',require('./routes/users'))



const PORT = process.env.PORT || 5000 
// process.env.PORT incase we doploy or use 5000 on our localhost

app.listen(PORT, console.log(`Server started on port ${PORT}`))
// `` for writing templare string with variable

