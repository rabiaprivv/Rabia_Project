const e = require("express");
const router = e.Router()
const ProductModel = require('../Models/ProductModel')

router.post("/add", async(req , res)=>{
    const product = new ProductModel
    product.name = req.body.name
    product.price= req.body.price
    product.quantity  = req.body.quantity
    product.description = req.body.description
    await product.save()
    res.send("Product added sucessfully")
})

router.get('/' , async(req,res) => {
     const data =  await ProductModel.find()
    res.send({'product':data})
})


module.exports = router