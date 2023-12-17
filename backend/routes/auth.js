const e = require("express");
const router = e.Router()
const joi = require('joi')

const AuthModel = require('../Models/AuthModels')
const product = require('./product.js')
//validations
const authValidator = joi.object({
        name: joi.string().required(),
        email: joi.string().email().required(),
        password: joi.string().min(8).required(),
        c_password: joi.ref('password'),
     });
//router
router.post("/register", async(req , res)=>{
        const user = new AuthModel()
        user.name = req.body.name
        user.email = req.body.email
        user.password  = req.body.password
        await user.save()
        res.send("user added sucessfully")
})
module.exports = router;