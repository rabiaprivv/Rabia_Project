const e = require("express");
const app = e();
require('dotenv').config()
const bodyparser = require('body-parser')
app.use(bodyparser.json())
require('./db/db')
const AuthRoutes = require('./routes/auth')
const ProductRoutes = require('./routes/product')
app.use('/auth' , AuthRoutes)
app.use('/product' ,ProductRoutes)


app.listen(process.env.PORT , () => {
    console.log(`Server Started At Port ${process.env.PORT}`)
})
