const e = require("express");
const app = e();
require('dotenv').config()
const bodyparser = require('body-parser')
app.use(bodyparser.json())
require('./db/db')
const AuthRoutes = require('./routes/auth')
app.use('/auth' , AuthRoutes)



app.listen(process.env.PORT , () => {
    console.log(`Server Started At Port ${process.env.PORT}`)
})
